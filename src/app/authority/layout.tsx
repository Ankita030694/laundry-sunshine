import type { Metadata } from "next";
import AuthorityClientLayout from "./AuthorityClientLayout";

export const metadata: Metadata = {
  title: "Admin Dashboard | Sunshine Equipments",
  description: "Admin dashboard for Sunshine Equipments laundry management system.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthorityClientLayout>{children}</AuthorityClientLayout>;
}
