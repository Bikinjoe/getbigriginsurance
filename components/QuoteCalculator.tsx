"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { site } from "@/lib/site";

type TruckType =
  | "box"
  | "dryvan"
  | "flatbed"
  | "reefer"
  | "hotshot"
  | "auto"
  | "tanker";
type Authority = "new" | "mid" | "seasoned";
type Radius = "local" | "regional" | "longhaul";
type Commodity = "general" | "building" | "produce" | "auto" | "hazmat" | "household";
type TruckValue = "under50" | "50to100" | "100to150" | "over150";
type Driver = "clean" | "minor" | "major";

// Base rates (annual, primary liability + physical damage combined)
const BASE: Record<TruckType, [number, number]> = {
  box: [8000, 11000],
  dryvan: [9000, 14000],
  flatbed: [10000, 15000],
  reefer: [11000, 16000],
  hotshot: [8000, 13000],
  auto: [14000, 22000],
  tanker: [13000, 19000],
};

const TRUCK_LABEL: Record<TruckType, string> = {
  box: "Box Truck",
  dryvan: "Dry Van",
  flatbed: "Flatbed",
  reefer: "Reefer",
  hotshot: "Hot Shot",
  auto: "Auto Transport",
  tanker: "Tanker",
};

const COMMODITY_LABEL: Record<Commodity, string> = {
  general: "General Freight",
  building: "Building Materials",
  produce: "Produce / Reefer",
  auto: "Auto Transport",
  hazmat: "Hazmat",
  household: "Household Goods",
};

function round100(n: number) {
  return Math.round(n / 100) * 100;
}

function fmt(n: number) {
  return `$${n.toLocaleString("en-US")}`;
}

type Estimate = {
  lo: number;
  hi: number;
  drivers: string[];
  levers: string[];
};

function calculate(params: {
  truck: TruckType;
  authority: Authority;
  radius: Radius;
  commodity: Commodity;
  truckValue: TruckValue;
  driver: Driver;
}): Estimate {
  let [lo, hi] = BASE[params.truck];
  const drivers: string[] = [];
  const levers: string[] = [];

  // Authority age
  if (params.authority === "new") {
    lo *= 1.4;
    hi *= 1.4;
    drivers.push(
      "new authority status (+40%) — carriers price in the unknown for the first 12 months"
    );
    levers.push(
      "after 12 months of clean operation, most carriers rerate and this premium comes off"
    );
  } else if (params.authority === "mid") {
    lo *= 1.15;
    hi *= 1.15;
    drivers.push("1–2 years of authority (+15%)");
    levers.push("at the 2-year mark, rates typically drop another 10–15%");
  }

  // Radius
  if (params.radius === "local") {
    lo *= 0.9;
    hi *= 0.9;
    drivers.push("local radius (-10%) — under 100 miles is the cheapest zone");
  } else if (params.radius === "longhaul") {
    lo *= 1.2;
    hi *= 1.2;
    drivers.push("long haul (+20%) — more miles, more exposure");
    levers.push(
      "tightening to regional (100–500 mi) typically drops the premium ~15%"
    );
  }

  // Commodity
  if (params.commodity === "hazmat") {
    lo *= 1.35;
    hi *= 1.35;
    drivers.push("hazmat commodity (+35%) — higher liability minimums required");
  } else if (params.commodity === "household") {
    lo *= 1.15;
    hi *= 1.15;
    drivers.push("household goods (+15%) — high-claim commodity");
  } else if (params.commodity === "produce" && params.truck !== "reefer") {
    lo *= 1.05;
    hi *= 1.05;
  }

  // Truck value
  if (params.truckValue === "over150") {
    lo += 3000;
    hi += 5000;
    drivers.push(
      "truck value over $150K (+$3K–$5K) — higher physical damage premium"
    );
    levers.push(
      "raising the physical damage deductible ($2,500 → $5,000) can save several hundred a year"
    );
  } else if (params.truckValue === "under50") {
    lo -= 500;
    hi -= 1000;
    levers.push("lower truck value keeps physical damage premium small");
  }

  // Driver record
  if (params.driver === "major") {
    lo *= 1.3;
    hi *= 1.3;
    drivers.push(
      "major violation or at-fault accident in last 3 years (+30%)"
    );
    levers.push(
      "the violation rolls off at 3 years — rate improves substantially then"
    );
  } else if (params.driver === "minor") {
    lo *= 1.08;
    hi *= 1.08;
    drivers.push("1–2 minor violations (+8%)");
  } else if (params.driver === "clean") {
    lo *= 0.95;
    hi *= 0.95;
    drivers.push("clean driving record (-5%)");
  }

  // Always-on levers
  levers.push(
    "re-shopping your account at renewal across our 23+ carriers often lowers the rate without changing coverage"
  );
  if (params.authority !== "new") {
    levers.push("paying annual or semi-annual saves the 3–5% finance charge");
  }

  return {
    lo: Math.max(0, round100(lo)),
    hi: Math.max(0, round100(hi)),
    drivers,
    levers: Array.from(new Set(levers)).slice(0, 4),
  };
}

export default function QuoteCalculator() {
  const [truck, setTruck] = useState<TruckType>("dryvan");
  const [authority, setAuthority] = useState<Authority>("new");
  const [radius, setRadius] = useState<Radius>("regional");
  const [commodity, setCommodity] = useState<Commodity>("general");
  const [truckValue, setTruckValue] = useState<TruckValue>("50to100");
  const [driver, setDriver] = useState<Driver>("clean");

  const estimate = useMemo(
    () => calculate({ truck, authority, radius, commodity, truckValue, driver }),
    [truck, authority, radius, commodity, truckValue, driver]
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="space-y-6 rounded-lg border border-border bg-surface-2 p-6"
      >
        <div>
          <label htmlFor="truck" className="block text-sm font-semibold text-foreground">
            Truck type
          </label>
          <select
            id="truck"
            value={truck}
            onChange={(e) => setTruck(e.target.value as TruckType)}
            className="mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
          >
            {(Object.keys(BASE) as TruckType[]).map((k) => (
              <option key={k} value={k}>
                {TRUCK_LABEL[k]}
              </option>
            ))}
          </select>
        </div>

        <fieldset>
          <legend className="text-sm font-semibold text-foreground">Authority age</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {(
              [
                { v: "new", l: "New (under 1 year)" },
                { v: "mid", l: "1–2 years" },
                { v: "seasoned", l: "2+ years" },
              ] as { v: Authority; l: string }[]
            ).map((o) => (
              <label
                key={o.v}
                className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm ${
                  authority === o.v
                    ? "border-flame bg-surface text-foreground"
                    : "border-border bg-surface text-muted hover:border-flame/60"
                }`}
              >
                <input
                  type="radio"
                  name="authority"
                  value={o.v}
                  checked={authority === o.v}
                  onChange={() => setAuthority(o.v)}
                  className="accent-flame"
                />
                {o.l}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-semibold text-foreground">Radius</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {(
              [
                { v: "local", l: "Local (under 100 mi)" },
                { v: "regional", l: "Regional (100–500 mi)" },
                { v: "longhaul", l: "Long Haul (500+ mi)" },
              ] as { v: Radius; l: string }[]
            ).map((o) => (
              <label
                key={o.v}
                className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm ${
                  radius === o.v
                    ? "border-flame bg-surface text-foreground"
                    : "border-border bg-surface text-muted hover:border-flame/60"
                }`}
              >
                <input
                  type="radio"
                  name="radius"
                  value={o.v}
                  checked={radius === o.v}
                  onChange={() => setRadius(o.v)}
                  className="accent-flame"
                />
                {o.l}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="commodity" className="block text-sm font-semibold text-foreground">
            Commodity
          </label>
          <select
            id="commodity"
            value={commodity}
            onChange={(e) => setCommodity(e.target.value as Commodity)}
            className="mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
          >
            {(Object.keys(COMMODITY_LABEL) as Commodity[]).map((k) => (
              <option key={k} value={k}>
                {COMMODITY_LABEL[k]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="truckValue" className="block text-sm font-semibold text-foreground">
            Truck value
          </label>
          <select
            id="truckValue"
            value={truckValue}
            onChange={(e) => setTruckValue(e.target.value as TruckValue)}
            className="mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-base text-foreground focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
          >
            <option value="under50">Under $50K</option>
            <option value="50to100">$50K – $100K</option>
            <option value="100to150">$100K – $150K</option>
            <option value="over150">Over $150K</option>
          </select>
        </div>

        <fieldset>
          <legend className="text-sm font-semibold text-foreground">Driver record</legend>
          <div className="mt-2 grid gap-2">
            {(
              [
                { v: "clean", l: "Clean (no tickets or accidents in 3 years)" },
                { v: "minor", l: "1–2 minor violations" },
                { v: "major", l: "Major violation or accident in last 3 years" },
              ] as { v: Driver; l: string }[]
            ).map((o) => (
              <label
                key={o.v}
                className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm ${
                  driver === o.v
                    ? "border-flame bg-surface text-foreground"
                    : "border-border bg-surface text-muted hover:border-flame/60"
                }`}
              >
                <input
                  type="radio"
                  name="driver"
                  value={o.v}
                  checked={driver === o.v}
                  onChange={() => setDriver(o.v)}
                  className="accent-flame"
                />
                {o.l}
              </label>
            ))}
          </div>
        </fieldset>
      </form>

      <aside className="space-y-4">
        <div className="rounded-lg border border-flame/40 bg-surface-2 p-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-flame">
            Estimated annual range
          </p>
          <p className="mt-2 text-4xl font-extrabold text-foreground sm:text-5xl">
            {fmt(estimate.lo)} – {fmt(estimate.hi)}
          </p>
          <p className="mt-2 text-sm text-muted">
            Primary liability + physical damage combined, annual.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-surface p-5">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-flame">
            What's driving this estimate
          </h3>
          <p className="mt-3 text-base text-muted">
            Starting point for a {TRUCK_LABEL[truck].toLowerCase()} hauling{" "}
            {COMMODITY_LABEL[commodity].toLowerCase()} is{" "}
            <strong className="text-foreground">
              {fmt(BASE[truck][0])} – {fmt(BASE[truck][1])}
            </strong>{" "}
            per year. Adjustments applied:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
            {estimate.drivers.length > 0 ? (
              estimate.drivers.map((d, i) => <li key={i}>{d}</li>)
            ) : (
              <li>no adjustments — you're at the base profile</li>
            )}
          </ul>
        </div>

        <div className="rounded-lg border border-border bg-surface p-5">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-flame">
            What could bring the rate down
          </h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
            {estimate.levers.map((l, i) => (
              <li key={i}>{l}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-dashed border-border bg-surface p-4 text-xs text-muted">
          This is an estimate only. Your actual rate depends on full
          underwriting review — MVR, PSP, prior loss history, radius-of-operation
          detail, and carrier-specific appetite.
        </div>

        <div className="rounded-lg border border-flame bg-surface-2 p-6">
          <h3 className="text-xl font-bold text-foreground">
            Get your actual quote.
          </h3>
          <p className="mt-2 text-base text-muted">
            We shop 23+ carriers and have a real number for you same day.{" "}
            <a href={site.phoneHref} className="font-semibold text-flame hover:underline">
              {site.phoneCTA}
            </a>
            .
          </p>
          <Link href="/get-a-quote" className="btn-primary mt-4 w-full sm:w-auto">
            Get a Quote →
          </Link>
        </div>
      </aside>
    </div>
  );
}
