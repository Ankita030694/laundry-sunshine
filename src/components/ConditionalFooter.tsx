"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();
  const isAuthorityPage = pathname?.startsWith('/authority') || pathname === '/login';

  if (isAuthorityPage) return null;

  return <Footer />;
}
