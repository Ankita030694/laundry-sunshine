import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "On-Site Laundry Equipment Repair Gurgaon | 4-Hour Response",
  description: "Professional on-site repair for commercial laundry machines in Gurgaon. 4-hour emergency response, certified technicians, and genuine OEM parts for all major brands.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
