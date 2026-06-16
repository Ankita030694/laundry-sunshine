import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Laundry Spare Parts Supplier | Sunshine Equipments",
  description: "Premium industrial laundry spare parts supplier in India. Genuine motors, pumps, belts, and electronics with nationwide rapid delivery and technical support.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
