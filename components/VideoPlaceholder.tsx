type Props = {
  label: string;
};

export default function VideoPlaceholder({ label }: Props) {
  return (
    <figure className="mt-8 overflow-hidden rounded-lg border border-ink/10 bg-ink text-white">
      <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-ink via-steel to-slate">
        <div className="text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-flame text-3xl">
            ▶
          </div>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-mist">
            YouTube Short
          </p>
        </div>
      </div>
      <figcaption className="px-4 py-3 text-sm font-medium text-mist">
        Watch: {label}
      </figcaption>
    </figure>
  );
}
