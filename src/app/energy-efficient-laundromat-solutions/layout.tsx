import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy-Efficient Laundromat Solutions | Sustainable Laundry Engineering",
  description: "Premium eco-friendly laundry solutions. Experts in heat recovery, water recycling, and high G-force extraction to reduce your utility bills by up to 50 percent.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
