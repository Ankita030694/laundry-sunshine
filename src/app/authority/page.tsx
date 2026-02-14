"use client";

import { useAuth } from "@/context/AuthContext";

export default function AuthorityDashboard() {
  const { user } = useAuth();

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-brand-blue tracking-tight">Overview</h1>
        <p className="text-gray-600 mt-2 text-lg">Welcome back, {user?.email?.split('@')[0] || 'Admin'}. Here&apos;s what&apos;s happening.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-xl">
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">Total Leads</p>
          <p className="text-4xl font-bold text-brand-blue">0</p>
          <div className="mt-4 flex items-center text-green-500 text-sm font-medium">
            <span>↑ 0% from last month</span>
          </div>
        </div>
        
        <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-xl">
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">Published Blogs</p>
          <p className="text-4xl font-bold text-brand-blue">0</p>
          <div className="mt-4 flex items-center text-gray-400 text-sm font-medium">
            <span>No updates yet</span>
          </div>
        </div>

        <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-xl md:col-span-2 lg:col-span-1">
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">System Status</p>
          <p className="text-lg font-bold text-green-500 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Operational
          </p>
          <p className="text-xs text-gray-400 mt-4 leading-relaxed">All services are running smoothly. Firebase connection established.</p>
        </div>
      </div>
    </div>
  );
}
