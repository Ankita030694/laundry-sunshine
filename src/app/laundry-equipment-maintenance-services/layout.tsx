import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Laundry Equipment Maintenance Services | Sunshine Equipments",
  description: "Maximize equipment uptime and efficiency with professional maintenance. From preventive checklists and AMCs to safety audits and predictive technology in India.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
