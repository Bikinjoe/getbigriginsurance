"use client";

import { useRouter } from "next/navigation";
import SembleyForm from "./SembleyForm";

// Wrapper used on /get-a-quote: when the short Sembley form posts a
// submission message, route the visitor to /thank-you (where the long
// form is embedded). If Sembley itself is configured to redirect to
// /thank-you server-side, this is a harmless no-op.
export default function SembleyQuickForm() {
  const router = useRouter();
  return (
    <SembleyForm
      formId="18431"
      token="xqtmt8JvRg8"
      showLogo={false}
      onSubmitted={() => router.push("/thank-you")}
    />
  );
}
