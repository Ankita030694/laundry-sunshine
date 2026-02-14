'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import Navbar from '@/components/Navbar';
import ConditionalFooter from '@/components/ConditionalFooter';
import { motion } from 'framer-motion';

interface Blog {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  image: string;
  slug: string;
}

export default function BlogListing() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(collection(db, 'blogs'), orderBy('date', 'desc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Blog[];
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F2EB] font-satoshi">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-brand-blue mb-4">Latest Insights</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Stay updated with the latest trends, maintenance tips, and innovations in the commercial laundry industry.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl h-96 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <Link href={`/blog/${blog.slug}`}>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={blog.image || '/placeholder-blog.jpg'} 
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-bold text-brand-blue shadow-sm">
                      {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-brand-blue mb-3 group-hover:text-brand-orange transition-colors line-clamp-2">
                      {blog.title}
                    </h2>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                      {blog.subtitle || blog.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...'}
                    </p>
                    <div className="flex items-center text-brand-orange font-bold text-sm uppercase tracking-widest">
                      Read Article
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      <ConditionalFooter />
    </div>
  );
}
