import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laundry Equipment Maintenance Services in Gurgaon | Sunshine Equipments",
  description: "Premium laundry equipment maintenance services in Gurgaon. Preventive maintenance, AMC systems, spare parts support, and expert repair for NCR laundry machines.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
