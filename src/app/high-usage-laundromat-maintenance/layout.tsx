import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "High-Usage Laundromat Maintenance | Professional Uptime Solutions",
  description: "Expert preventative maintenance for high-volume 24/7 laundromats. Specialized in bearing care, vibration damping, and electrical safety to ensure 100% equipment uptime.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
