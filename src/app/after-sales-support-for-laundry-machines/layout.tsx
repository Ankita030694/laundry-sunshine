import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "World-Class After-Sales Support for Laundry Machines | Sunshine Equipments",
  description: "Discover world-class after-sales support for industrial laundry. From 24/7 technical hotlines and site training to remote diagnostics and nationwide engineering in India.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
