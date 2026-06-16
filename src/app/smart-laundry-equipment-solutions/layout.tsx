import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Industrial Laundry Solutions | IoT & AI Integration",
  description: "Revolutionize your laundry facility with AI-driven predictive maintenance, RFID linen tracking, and real-time cloud analytics for peak operational efficiency.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
