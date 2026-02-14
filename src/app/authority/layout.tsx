"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { 
  Users, 
  FileText, 
  LogOut, 
  LayoutDashboard,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

export default function AuthorityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-orange"></div>
      </div>
    );
  }

  if (!user) return null;

  const navItems = [
    { name: "Dashboard", href: "/authority", icon: LayoutDashboard },
    { name: "Leads", href: "/authority/leads", icon: Users },
    { name: "Blogs", href: "/authority/blogs", icon: FileText },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-gray-50 flex" style={{ fontFamily: 'Satoshi, sans-serif' }}>
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-brand-blue text-white transition-transform duration-300 transform
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:inset-0
      `}>
        <div className="h-full flex flex-col">
          {/* Logo Section */}
          <div className="p-6 border-b border-white/10">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tighter">SUNSHINE</span>
              <span className="text-[10px] bg-brand-orange px-1.5 py-0.5 rounded text-white font-bold uppercase">Admin</span>
            </Link>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`
                    flex items-center justify-between px-4 py-3 rounded-lg transition-all group
                    ${isActive 
                      ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/20" 
                      : "text-white/60 hover:bg-white/5 hover:text-white"}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={20} className={isActive ? "text-white" : "group-hover:text-white"} />
                    <span className="font-medium text-sm">{item.name}</span>
                  </div>
                  {isActive && <ChevronRight size={16} />}
                </Link>
              );
            })}
          </nav>

          {/* User Section & Logout */}
          <div className="p-4 border-t border-white/10">
            <div className="px-4 py-3 mb-4 bg-white/5 rounded-lg">
              <p className="text-xs text-white/40 uppercase font-bold tracking-widest mb-1">Logged in as</p>
              <p className="text-sm font-medium truncate">{user.email}</p>
            </div>
            <button
              onClick={logout}
              className="w-full flex items-center gap-3 px-4 py-3 text-white/60 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
            >
              <LogOut size={20} />
              <span className="font-medium text-sm">Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header (Mobile) */}
        <header className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <button onClick={toggleSidebar} className="p-2 text-brand-blue">
            <Menu size={24} />
          </button>
          <span className="font-bold text-brand-blue tracking-tight">SUNSHINE ADMIN</span>
          <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange font-bold">
            {user.email?.charAt(0).toUpperCase()}
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-10">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
