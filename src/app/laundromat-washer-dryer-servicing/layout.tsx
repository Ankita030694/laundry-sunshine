import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Laundromat Washer & Dryer Servicing | High-Efficiency Support",
  description: "Professional industrial laundromat equipment servicing and maintenance. Experts in maximizing uptime, reducing utility costs, and ensuring peak performance for your laundry business.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
