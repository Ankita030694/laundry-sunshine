import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Washer-Extractor & Dryer Servicing Delhi NCR | Expert Industrial Repair",
  description: "Premium industrial laundry equipment servicing across Delhi, Gurgaon, and Noida. Authorized repair for all major brands with rapid response and genuine OEM parts.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
