import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Washing Machine Installation | Sunshine Equipments",
  description: "Master the art of industrial laundry equipment installation. From site preparation and utility planning to commissioning and safety compliance in India.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
