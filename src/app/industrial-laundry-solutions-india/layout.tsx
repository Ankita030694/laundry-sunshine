import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Laundry Solutions in India | Sunshine Equipments",
  description: "Leading industrial laundry solutions in India. Premium tunnel washers, extraction systems, and centralized laundry setups for hospitality and healthcare.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
