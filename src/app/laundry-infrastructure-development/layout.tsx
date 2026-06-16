import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laundry Infrastructure Development | Turnkey Project Engineering",
  description: "Professional design and development of industrial laundry facilities. We handle everything from civil plinths and plumbing to electrical load and layout optimization.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
