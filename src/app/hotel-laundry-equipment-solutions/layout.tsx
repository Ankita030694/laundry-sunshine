import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced Hotel Laundry Equipment Solutions | Sunshine Equipments",
  description: "Discover the most advanced hotel laundry equipment solutions. In-depth technical guide on industrial washers, dryers, and ironers for the hospitality sector.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
