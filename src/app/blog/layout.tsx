import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Laundry Blog & Industry Insights | Sunshine Equipments",
  description: "Read the latest articles, expert guides, and updates on commercial laundry equipment, maintenance, and setup in India.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
