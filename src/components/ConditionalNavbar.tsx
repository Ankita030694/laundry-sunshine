"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  const isAuthorityPage = pathname?.startsWith('/authority') || pathname === '/login';

  if (isAuthorityPage) return null;

  return <Navbar />;
}
