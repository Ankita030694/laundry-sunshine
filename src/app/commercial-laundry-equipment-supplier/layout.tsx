import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premier Commercial Laundry Equipment Supplier | Sunshine Equipments",
  description: "Discover the latest in industrial laundry technology. From high-G washer extractors to smart finishing systems, learn how to optimize your commercial laundry operations.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
