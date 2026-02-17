import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Professional Hotel Laundry Solutions | 5,500+ Word Industry Guide | Sunshine Equipments",
    description: "The definitive guide to hotel laundry management. Deep technical insights on industrial washers, dryers, ironers, hygiene protocols, and ROI optimization for the hospitality sector.",
};

export default function HotelLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
