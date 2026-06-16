import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leads Management | Admin Dashboard | Sunshine Equipments",
  description: "Admin control panel to track and manage business inquiries and service leads for Sunshine Equipments.",
};

export default function LeadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
