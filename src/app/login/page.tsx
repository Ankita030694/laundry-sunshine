"use client";

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/authority"); // Redirect to authority dashboard
    } catch (err: any) {
      console.error(err);
      if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password") {
        setError("Invalid email or password.");
      } else if (err.code === "auth/invalid-credential") {
        setError("Invalid credentials provided.");
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12" style={{ fontFamily: 'Satoshi, sans-serif' }}>
      <div className="max-w-md w-full space-y-8 bg-white p-10 shadow-xl border border-gray-100">
        <div className="text-center">
          <Link href="/" className="inline-block mb-6">
            <h1 className="text-2xl font-bold text-brand-blue tracking-tighter">SUNSHINE</h1>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Admin Portal</h2>
          <p className="mt-2 text-sm text-gray-600">Please sign in to your account</p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700 text-sm">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-10 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm transition-all"
                  placeholder="admin@sunshine.com"
                />
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-10 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm transition-all"
                  placeholder="••••••••"
                />
                <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-bold uppercase tracking-widest text-white bg-brand-orange hover:bg-brand-orange-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange transition-all shadow-lg active:scale-[0.98] disabled:opacity-70"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <span className="flex items-center gap-2">
                  Sign In <ArrowRight size={16} />
                </span>
              )}
            </button>
          </div>
        </form>

        <div className="text-center">
          <Link href="/" className="text-sm font-medium text-brand-blue hover:text-brand-orange transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
