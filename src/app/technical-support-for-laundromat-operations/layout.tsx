import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Support for Laundromat Operations | System Experts",
  description: "Comprehensive technical support for modern laundromats. Includes remote monitoring, system diagnostics, electrical planning, and operational consulting.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
