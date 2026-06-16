import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Laundry Machine Preventive Maintenance Guide",
  description: "The definitive technical guide to preventive maintenance for industrial washers, dryers, and ironers. Optimize ROI and ensure zero downtime for your facility.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
