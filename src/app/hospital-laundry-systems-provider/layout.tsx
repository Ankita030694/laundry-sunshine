import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospital Laundry Systems Provider | Sunshine Equipments",
  description: "Premium hospital laundry systems provider. Industrial medical grade washers, dryers, and barrier systems designed for healthcare excellence and disinfection.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
