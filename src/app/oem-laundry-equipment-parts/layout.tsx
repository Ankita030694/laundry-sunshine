import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Genuine OEM Laundry Equipment Parts | Sunshine Equipments",
  description: "Premium industrial laundry spare parts. Learn why genuine OEM components are critical for reliability, ROI, and warranty protection in your facility.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
