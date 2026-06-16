import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Efficient Industrial Laundry Systems | Sunshine Equipments",
  description: "Cut utility costs by 40% with our eco-friendly laundry solutions. Solar-thermal integration, water recycling, and advanced heat recovery for modern facilities.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
