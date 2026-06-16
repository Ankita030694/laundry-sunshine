import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Laundry Troubleshooting & Diagnostic Services | Sunshine",
  description: "Professional troubleshooting for industrial washers, dryers, and ironers. Expert diagnostics, 4-hour response, and rapid repair for hospitality and healthcare.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
