import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laundry Chemical Dosing Maintenance | Precision Calibration",
  description: "Professional maintenance and calibration for automated laundry chemical dispensing systems. Optimize costs, ensure fabric safety, and maintain perfect wash quality.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
