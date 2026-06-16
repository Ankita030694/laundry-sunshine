import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laundromat Equipment Supplier | Sunshine Equipments",
  description: "Premium laundromat equipment supplier. In-depth technical guide on coin-op, card-op, and smart laundromat solutions for entrepreneurs.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
