import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laundry Machine Suppliers in Delhi NCR | Sunshine Equipments",
  description: "Premium laundry machine suppliers in Delhi NCR. Wholesale industrial washers, dryers, and ironing systems for Noida, Gurgaon, and Ghaziabad.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
