"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, getDocs, Timestamp } from "firebase/firestore";
import { Loader2, User, Phone, Mail, MessageSquare, Calendar, ExternalLink } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  source: string;
  createdAt: Timestamp;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const fetchedLeads = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Lead[];
        setLeads(fetchedLeads);
      } catch (error) {
        console.error("Error fetching leads:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  const formatDate = (timestamp: Timestamp) => {
    if (!timestamp) return "N/A";
    const date = timestamp.toDate();
    return new Intl.DateTimeFormat('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(date);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <Loader2 className="animate-spin text-brand-orange mb-4" size={40} />
        <p className="text-gray-500 font-medium animate-pulse">Loading inquiries...</p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-brand-blue tracking-tight">Leads</h1>
          <p className="text-gray-600 mt-2 text-lg">Detailed list of customer inquiries and quotes.</p>
        </div>
        <div className="bg-brand-orange/10 px-4 py-2 rounded-lg border border-brand-orange/20">
          <span className="text-brand-orange font-bold text-sm uppercase tracking-wider">Total: {leads.length}</span>
        </div>
      </div>
      
      {leads.length === 0 ? (
        <div className="bg-white p-20 shadow-sm border border-gray-100 rounded-2xl flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
            <User className="w-10 h-10 text-gray-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">No leads found</h3>
          <p className="text-gray-500 max-w-sm mt-2">When someone fills out the contact form on your website, their details will appear here instantly.</p>
        </div>
      ) : (
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-widest">Customer Details</th>
                <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-widest">Message</th>
                <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-widest">Source</th>
                <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-widest">Date & Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-6">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-brand-blue font-bold text-lg">
                        <User size={16} className="text-gray-400" />
                        {lead.name}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <a href={`tel:${lead.phone}`} className="flex items-center gap-1.5 hover:text-brand-orange transition-colors">
                          <Phone size={14} />
                          {lead.phone}
                        </a>
                        <a href={`mailto:${lead.email}`} className="flex items-center gap-1.5 hover:text-brand-orange transition-colors">
                          <Mail size={14} />
                          {lead.email}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6 max-w-md">
                    <div className="flex gap-2">
                      <MessageSquare size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-sm leading-relaxed italic">&quot;{lead.message}&quot;</p>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-brand-blue/5 text-brand-blue border border-brand-blue/10">
                      {lead.source || "Direct"}
                    </span>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                      <Calendar size={14} className="text-gray-300" />
                      {formatDate(lead.createdAt)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
