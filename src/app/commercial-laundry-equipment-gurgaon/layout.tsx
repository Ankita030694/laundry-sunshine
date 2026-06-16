import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Laundry Equipment in Gurgaon | Sunshine Equipments",
  description: "Premium commercial laundry equipment in Gurgaon. Industrial washers, dryers, and ironing systems for hotels, hospitals, and laundries in NCR.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
