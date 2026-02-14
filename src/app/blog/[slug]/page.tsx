import { collection, getDocs, query, where, limit, orderBy } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import type { Metadata, ResolvingMetadata } from "next";
import ArticleDetail, { Blog, FAQ, Review } from "./blogdetail";
import Script from "next/script";
import { unstable_cache } from 'next/cache';
import PerformanceMonitor from '../../../components/PerformanceMonitor';
import Navbar from "@/components/Navbar";

// Enhanced cache with TTL (Time To Live)
const blogCache = new Map<string, { data: any; timestamp: number }>();
const faqCache = new Map<string, { data: any[]; timestamp: number }>();
const reviewCache = new Map<string, { data: any[]; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// Helper function to check if cache entry is valid
const isCacheValid = (timestamp: number) => {
  return Date.now() - timestamp < CACHE_TTL;
};

// Optimized function to fetch blog by slug with enhanced caching
const getBlogBySlug = unstable_cache(async (slug: string) => {
  // Check cache first with TTL validation
  const cached = blogCache.get(slug);
  if (cached && isCacheValid(cached.timestamp)) {
    return cached.data;
  }

  console.log(`[getBlogBySlug] Fetching blog for slug: "${slug}"`);

  try {
    const blogsCollection = collection(db, "blogs");
    
    // Try exact match first
    let q = query(blogsCollection, where("slug", "==", slug), limit(1));
    let querySnapshot = await getDocs(q);

    // If not found, try decoded slug
    if (querySnapshot.empty) {
        const decodedSlug = decodeURIComponent(slug);
        if (decodedSlug !== slug) {
            console.log(`[getBlogBySlug] Retrying with decoded slug: "${decodedSlug}"`);
            q = query(blogsCollection, where("slug", "==", decodedSlug), limit(1));
            querySnapshot = await getDocs(q);
        }
    }
    
    // If still not found, try trimming
    if (querySnapshot.empty) {
        const trimmedSlug = slug.trim();
        if (trimmedSlug !== slug) {
            console.log(`[getBlogBySlug] Retrying with trimmed slug: "${trimmedSlug}"`);
            q = query(blogsCollection, where("slug", "==", trimmedSlug), limit(1));
            querySnapshot = await getDocs(q);
        }
    }

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const data = { id: doc.id, ...doc.data() };
      
      console.log(`[getBlogBySlug] Found blog: ${doc.id}`);

      // Cache the result with timestamp
      blogCache.set(slug, { data, timestamp: Date.now() });
      return data;
    }
    
    console.log(`[getBlogBySlug] No blog found for slug: "${slug}"`);
    return null;
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    return null;
  }
}, ['blog-by-slug'], { 
  revalidate: 60, // Reduced revalidation time for debugging
  tags: ['blogs']
});

// Function to fetch FAQs server-side with enhanced caching
const getBlogFAQs = unstable_cache(async (blogId: string) => {
  const cached = faqCache.get(blogId);
  if (cached && isCacheValid(cached.timestamp)) {
    return cached.data;
  }

  try {
    // In your Blog object, FAQs are already included in the `faqs` field as an array
    // However, if they were in a subcollection, this is how you'd fetch them.
    // Given the previous code, they are in the blog document itself.
    return []; 
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
}, ['blog-faqs'], {
  revalidate: 300,
  tags: ['faqs']
});

// Function to fetch Reviews server-side
const getBlogReviews = unstable_cache(async (blogId: string) => {
  const cached = reviewCache.get(blogId);
  if (cached && isCacheValid(cached.timestamp)) {
    return cached.data;
  }

  try {
    return []; // Same as FAQs, usually in doc
  } catch (error) {
    console.error("Error fetching Reviews:", error);
    return [];
  }
}, ['blog-reviews'], {
  revalidate: 300,
  tags: ['reviews']
});

// Function to fetch Related Blogs
const getRelatedBlogs = async (excludeId: string) => {
  try {
    const blogsCollection = collection(db, 'blogs');
    const q = query(
      blogsCollection, 
      orderBy('created', 'desc'), 
      limit(6) // Fetch a few more to filter
    );
    const querySnapshot = await getDocs(q);
    
    const allBlogs = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as any[];
    
    // Filter out current blog and take top 3
    return allBlogs.filter(blog => blog.id !== excludeId).slice(0, 3);
  } catch (error) {
    console.error("Error fetching related blogs:", error);
    return [];
  }
};

// Dynamic metadata generation
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await props.params;

  let title = "Blog Post | Sunshine Equipments";
  let description = "Read our latest insights and articles at Sunshine Equipments";
  let image = "";
  let author = "Sunshine Equipments";

  const baseUrl = "https://sunshineequipments.com";

  try {
    const blogData = await getBlogBySlug(slug);
    
    if (blogData) {
      title = blogData.metaTitle || blogData.title || title;
      description = blogData.metaDescription || description;
      image = blogData.image || "";
      author = blogData.author || author;
    }
  } catch (error) {
    console.error("Error fetching article metadata:", error);
  }

  const blogUrl = `${baseUrl}/blog/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: blogUrl,
    },
    openGraph: {
      title,
      description,
      url: blogUrl,
      siteName: "Sunshine Equipments",
      type: "article",
      images: image ? [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        }
      ] : [],
      authors: [author],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : [],
      creator: "@sunshineequipments",
    },
  };
}

// Updated Page component
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  let blogData: any = null;
  let faqs: FAQ[] = [];
  let reviews: Review[] = [];
  let relatedBlogs: Blog[] = [];
  
  let combinedSchema = null;

  try {
    blogData = await getBlogBySlug(slug);
    if (blogData) {
      // FAQs and Reviews are likely in the blogData itself based on previous step
      faqs = (blogData.faqs || []).map((f: any, i: number) => ({ id: `faq-${i}`, ...f }));
      reviews = (blogData.reviews || []).map((r: any, i: number) => ({ id: `rev-${i}`, ...r }));
      
      relatedBlogs = await getRelatedBlogs(blogData.id);

      // Generate Combined Schema
      combinedSchema = generateCombinedSchema(blogData, faqs, reviews);
    }
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }

  if (!blogData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Article Not Found</h1>
          <p className="text-gray-600 mt-2">The article you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-satoshi">
      <Navbar />
      <PerformanceMonitor />
      {/* Combined Schema */}
      {combinedSchema && (
        <Script
          id="blog-combined-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
        />
      )}

      <ArticleDetail 
        blog={blogData as any} 
        faqs={faqs} 
        reviews={reviews} 
        relatedBlogs={relatedBlogs as any}
      />
    </div>
  );
}

function generateCombinedSchema(blogData: any, faqs: any[], reviews: any[]) {
  const baseUrl = "https://sunshineequipments.com";
  const blogUrl = `${baseUrl}/blog/${blogData.slug}`;
  const isOrganizationAuthor = !blogData.author || blogData.author === "Sunshine Equipments";

  const graph = [];

  // 1. Article Schema
  const articleSchema: any = {
    "@type": "BlogPosting",
    "@id": `${blogUrl}#article`,
    "isPartOf": { "@id": blogUrl },
    "author": {
      "@type": isOrganizationAuthor ? "Organization" : "Person",
      "name": blogData.author || "Sunshine Equipments",
      "url": `${baseUrl}/about`
    },
    "headline": blogData.title,
    "datePublished": blogData.date,
    "dateModified": blogData.date,
    "mainEntityOfPage": { "@id": blogUrl },
    "publisher": { "@id": `${baseUrl}/#organization` },
    "image": blogData.image ? {
      "@type": "ImageObject",
      "url": blogData.image,
      "caption": blogData.title
    } : undefined,
    "keywords": blogData.metaTitle || blogData.title,
    "articleSection": "Laundry Solutions",
    "inLanguage": "en-IN",
    "description": blogData.metaDescription || blogData.subtitle || blogData.description?.replace(/<[^>]*>/g, '').substring(0, 160) || ''
  };
  graph.push(articleSchema);

  // 2. Organization Schema
  const organizationSchema: any = {
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "Sunshine Equipments",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/sunshine_logo.svg`
    }
  };

  // Add AggregateRating if reviews exist
  if (reviews && reviews.length > 0) {
    const totalRating = reviews.reduce((sum, review) => sum + (Number(review.rating) || 0), 0);
    const avgRating = (totalRating / reviews.length).toFixed(1);

    organizationSchema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": avgRating,
      "reviewCount": reviews.length.toString(),
      "bestRating": "5",
      "worstRating": "1"
    };
  }

  graph.push(organizationSchema);

  // 3. Breadcrumb Schema
  graph.push({
    "@type": "BreadcrumbList",
    "@id": `${blogUrl}#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${baseUrl}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": blogData.title,
        "item": blogUrl
      }
    ]
  });

  // 4. FAQ Schema (if present)
  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${blogUrl}#faq`,
      "name": `${blogData.title} - Frequently Asked Questions`,
      "description": `Frequently asked questions about ${blogData.title}`,
      "url": blogUrl,
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer.replace(/<[^>]*>/g, '')
        }
      }))
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}
