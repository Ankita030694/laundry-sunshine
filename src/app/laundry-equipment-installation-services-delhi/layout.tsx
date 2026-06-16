import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laundry Equipment Installation Services in Delhi | Sunshine Equipments",
  description: "Professional laundry equipment installation services in Delhi. Turnkey industrial setups, foundation engineering, electrical load planning, and compliance for NCR.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
