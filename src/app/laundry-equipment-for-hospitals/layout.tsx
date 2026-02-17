import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Industrial Hospital Laundry Solutions | Barrier Washers & Hygiene Standards | Sunshine Equipments",
    description: "Comprehensive guide to healthcare laundry management. Learn about barrier washers, infection control, pathogens, and NABH standards for Indian hospitals.",
};

export default function HospitalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
