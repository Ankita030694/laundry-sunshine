import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospitality Laundry Solutions | Sunshine Equipments",
  description: "Premium hospitality laundry solutions. In-depth technical guide on laundry for hotels, resorts, and cruise lines for operational excellence.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
