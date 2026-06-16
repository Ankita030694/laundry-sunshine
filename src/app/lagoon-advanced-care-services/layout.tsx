import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lagoon Advanced Care Services | Professional Wet Cleaning Experts",
  description: "Premium professional wet cleaning for delicate fabrics and luxury garments. The only system approved by Woolmark for 'dry clean only' woolens. Non-toxic and ecological.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
