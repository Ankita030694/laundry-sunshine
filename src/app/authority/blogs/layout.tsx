import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Blogs | Admin Dashboard | Sunshine Equipments",
  description: "Admin control panel to create, edit, and manage blog posts for Sunshine Equipments.",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
