import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Laundry Equipment Maintenance | Sunshine Equipments",
  description: "Premium healthcare laundry equipment maintenance. Technical guide to preventative protocols, validation, and uptime optimization for hospital systems.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
