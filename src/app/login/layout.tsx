import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Login | Sunshine Equipments",
  description: "Log in to your Sunshine Equipments account to manage service requests, access spare parts catalogs, and track AMCs.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
