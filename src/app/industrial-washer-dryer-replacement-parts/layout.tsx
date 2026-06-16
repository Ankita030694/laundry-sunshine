import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Washer & Dryer Replacement Parts | Genuine OEM Spares",
  description: "Authorized supplier of genuine replacement parts for commercial laundry equipment. We stock bearings, motors, valves, and boards for all major industrial brands.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
