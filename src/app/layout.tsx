import type { Metadata } from "next";
import "./globals.css";
import ConditionalNavbar from "@/components/ConditionalNavbar";
import ConditionalFooter from "@/components/ConditionalFooter";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { ModalProvider } from "@/context/ModalContext";
import { AuthProvider } from "@/context/AuthContext";
import ContactModal from "@/components/ContactModal";

export const metadata: Metadata = {
  title: "Sunshine Equipments | Commercial Laundry Machine Repair & Supplies India",
  description: "Premier supplier of industrial laundry equipment in India. Expert repair, AMC, and genuine spare parts for Electrolux, Girbau, and more since 2000.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AuthProvider>
          <ModalProvider>
            <ConditionalNavbar />
            {children}
            <ConditionalFooter />
            <WhatsAppWidget />
            <ContactModal />
          </ModalProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
