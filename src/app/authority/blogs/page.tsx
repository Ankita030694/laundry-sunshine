'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faChartLine, faClipboardList, faCog, faPlus, faEdit, faTrash, faUpload, faMagic } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { db, auth, storage } from '../../../lib/firebase'; // adjust the path as needed
import { useRouter } from 'next/navigation'; 
import dynamic from 'next/dynamic';

// Dynamically import Tiptap editor with client-side rendering only
const TiptapEditor = dynamic(() => import('./TiptapEditor'), { 
  ssr: false,
  loading: () => <p>Loading Editor...</p>,
});

// Define FAQ interface
interface FAQ {
  id?: string;
  question: string;
  answer: string;
}

// Define Blog interface with updated structure
interface Blog {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  image: string;
  created: number;
  metaTitle?: string;
  metaDescription?: string;
  slug: string; // New slug field for URLs
  faqs?: FAQ[]; // New field for FAQs
  reviews?: Review[]; // New field for Reviews
  author: string; // New author field
}

// Define Review interface
interface Review {
  id?: string;
  name: string;
  rating: number;
  review: string;
}

const BlogsDashboard = () => {
  const [activeTab, setActiveTab] = useState('blogs');
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
  const [newBlog, setNewBlog] = useState<Blog>({
    title: '',
    subtitle: '',
    description: '',
    date: new Date().toISOString().split('T')[0], // Format as YYYY-MM-DD
    image: '',
    created: Date.now(),
    metaTitle: '',
    metaDescription: '',
    slug: '', // Initialize the slug field
    faqs: [], // Initialize empty FAQs array
    reviews: [], // Initialize empty Reviews array
    author: 'Anuj Anand Malik' // Default author changed from 'Team AMA'
  });
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Set the number of items per page
  const [rssDebugInfo, setRssDebugInfo] = useState<string>('');
  const [isLoadingRss, setIsLoadingRss] = useState(false);

  // AI Generation state
  const [primaryKeyword, setPrimaryKeyword] = useState('');
  const [secondaryKeyword, setSecondaryKeyword] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // New Image Generation and Content Expansion state
  const [imagePrompt, setImagePrompt] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [isUploadingGenerated, setIsUploadingGenerated] = useState(false);
  const [expansionPrompt, setExpansionPrompt] = useState('');
  const [isExpanding, setIsExpanding] = useState(false);

  // Calculate the total number of pages
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  // Get the current blogs to display based on the current page
  const currentBlogs = blogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Check if user is logged in; if not, redirect to login page
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/login');
      }
    });
    return () => unsubscribe();
  }, [router]);

  // Logout handler using Firebase Auth
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  // Navigation handler: Redirect for Blogs and Articles
  const handleNavigation = (itemId: string) => {
    if (itemId === 'blogs') {
      router.push('/admin/blogs');
    } else if (itemId === 'articles') {
      router.push('/admin/articles');
    } else if (itemId === 'home') {
      router.push('/admin/dashboard');
    } else if (itemId === 'users') {
      router.push('/admin/users');
    } else if (itemId === 'amalive') {
      router.push('/admin/amalive');
    } else {
      setActiveTab(itemId);
    }
  };

  // Fetch blogs data
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'blogs'));
        const data = querySnapshot.docs.map(doc => {
          const docData = doc.data();
          return {
            id: doc.id,
            title: docData.title || '',
            subtitle: docData.subtitle || '',
            description: docData.description || '',
            date: docData.date || '',
            image: docData.image || '',
            created: docData.created || Date.now(),
            metaTitle: docData.metaTitle || '',
            metaDescription: docData.metaDescription || '',
            slug: docData.slug || '',
            faqs: docData.faqs || [],
            reviews: docData.reviews || [],
            author: docData.author || 'Team LaundryAMC'
          };
        });
        // Sort blogs by date in descending order (newest first)
        const sortedData = data.sort((a, b) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return dateB - dateA;
        });
        setBlogs(sortedData);
      } catch (error) {
        console.error("Error fetching blogs data:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Autosave functionality
  useEffect(() => {
    if (showBlogForm && newBlog) {
      // Don't save if it's empty initial state
      if (newBlog.title === '' && newBlog.description === '') return;

      const timer = setTimeout(() => {
        const key = formMode === 'edit' && newBlog.id ? `autosave_blog_${newBlog.id}` : 'autosave_blog_new';
        localStorage.setItem(key, JSON.stringify(newBlog));
      }, 1000); // Save after 1 second of inactivity

      return () => clearTimeout(timer);
    }
  }, [newBlog, showBlogForm, formMode]);

  // Add a helper function to generate slug from title
  const generateSlug = (title: string) => {
    return title.toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
      .trim(); // Trim spaces from start and end
  };

  // Handle blog form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewBlog(prevState => {
      // If title field is changed, auto-generate slug (only if slug is empty or user hasn't modified it)
      if (name === 'title' && (!prevState.slug || prevState.slug === generateSlug(prevState.title))) {
        return {
          ...prevState,
          [name]: value,
          slug: generateSlug(value)
        };
      }
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  // Handle Tiptap editor content changes
  const handleEditorChange = (content: string) => {
    setNewBlog(prevState => ({
      ...prevState,
      description: content
    }));
  };

  // Add FAQ to the blog
  const addFaq = () => {
    setNewBlog(prevState => ({
      ...prevState,
      faqs: [...(prevState.faqs || []), { question: '', answer: '' }]
    }));
  };

  // Remove FAQ from the blog
  const removeFaq = (index: number) => {
    setNewBlog(prevState => ({
      ...prevState,
      faqs: (prevState.faqs || []).filter((_, i) => i !== index)
    }));
  };

  // Handle FAQ input changes
  const handleFaqChange = (index: number, field: 'question' | 'answer', value: string) => {
    setNewBlog(prevState => {
      const updatedFaqs = [...(prevState.faqs || [])];
      updatedFaqs[index] = { 
        ...updatedFaqs[index], 
        [field]: value 
      };
      return {
        ...prevState,
        faqs: updatedFaqs
      };
    });
  };

  // Add Review to the blog
  const addReview = () => {
    setNewBlog(prevState => ({
      ...prevState,
      reviews: [...(prevState.reviews || []), { name: '', rating: 5, review: '' }]
    }));
  };

  // Remove Review from the blog
  const removeReview = (index: number) => {
    setNewBlog(prevState => ({
      ...prevState,
      reviews: (prevState.reviews || []).filter((_, i) => i !== index)
    }));
  };

  // Handle Review input changes
  const handleReviewChange = (index: number, field: keyof Review, value: string | number) => {
    setNewBlog(prevState => {
      const updatedReviews = [...(prevState.reviews || [])];
      updatedReviews[index] = { 
        ...updatedReviews[index], 
        [field]: value 
      };
      return {
        ...prevState,
        reviews: updatedReviews
      };
    });
  };

  // Handle file upload to Firebase Storage
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check file size (limit to 10MB)
    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
    if (file.size > MAX_FILE_SIZE) {
      alert("Image is too large. Maximum size is 10MB.");
      return;
    }
    
    try {
      setUploading(true);
      setUploadProgress(0);
      
      // Create a reference to the file in Firebase Storage
      const storageRef = ref(storage, `blog-images/${Date.now()}_${file.name}`);
      
      // Create a local preview of the image
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
      
      // Compress the image before uploading if it's an image
      let fileToUpload = file;
      if (file.type.startsWith('image/')) {
        fileToUpload = await compressImage(file);
      }
      
      // Upload with retry logic
      const maxRetries = 3;
      let retryCount = 0;
      let uploadSuccessful = false;
      
      while (retryCount < maxRetries && !uploadSuccessful) {
        try {
          // Upload the file
          const snapshot = await uploadBytes(storageRef, fileToUpload);
          
          // Get the download URL and update the blog state
          const downloadURL = await getDownloadURL(snapshot.ref);
          setNewBlog(prevState => ({
            ...prevState,
            image: downloadURL
          }));
          
          uploadSuccessful = true;
          setUploadProgress(100);
        } catch (err) {
          console.error(`Upload attempt ${retryCount + 1} failed:`, err);
          retryCount++;
          
          if (retryCount >= maxRetries) {
            throw new Error(`Failed after ${maxRetries} attempts: ${err instanceof Error ? err.message : String(err)}`);
          }
          
          // Wait before retrying (exponential backoff)
          await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, retryCount)));
        }
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert(`Failed to upload image: ${error instanceof Error ? error.message : "Please check your internet connection and try again."}`);
    } finally {
      setUploading(false);
    }

  };

  // Handle AI generation
  const handleGenerate = async () => {
    if (!primaryKeyword.trim()) {
      alert('Please enter a primary keyword.');
      return;
    }

    try {
      setIsGenerating(true);
      const response = await fetch('/api/generate-article', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ primaryKeyword, secondaryKeyword }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to generate blog');
      }

      // Handle streaming response
      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('No reader available');
      }

      let accumulatedDetails = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulatedDetails += new TextDecoder().decode(value);
      }

      const generatedData = JSON.parse(accumulatedDetails);

      setNewBlog(prevState => ({
        ...prevState,
        title: generatedData.title || prevState.title,
        subtitle: generatedData.subtitle || prevState.subtitle,
        description: generatedData.description || prevState.description, // HTML content
        metaTitle: generatedData.metaTitle || prevState.metaTitle,
        metaDescription: generatedData.metaDescription || prevState.metaDescription,
        slug: generatedData.slug || prevState.slug, // Or generate from title
        faqs: generatedData.faqs || prevState.faqs,
        reviews: generatedData.reviews || prevState.reviews,
      }));

      // If slug wasn't provided but title was, generate one
      if (!generatedData.slug && generatedData.title) {
        const generatedSlug = generatedData.title
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-');
          
        setNewBlog(prev => ({ ...prev, slug: generatedSlug }));
      }
      
      // Also set the image prompt if suggested
      if (generatedData.suggestedImagePrompt) {
        setImagePrompt(generatedData.suggestedImagePrompt);
      }
      
      alert('Blog generated successfully! Please review and add an image.');
    } catch (error) {
      console.error('Error generating blog:', error);
      alert('Failed to generate blog. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateImage = async () => {
    if (!imagePrompt.trim()) {
      alert('Please enter an image prompt.');
      return;
    }

    try {
      setIsGeneratingImage(true);
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: imagePrompt }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to generate image');
      }

      const data = await response.json();
      setGeneratedImageUrl(data.imageUrl);
    } catch (error) {
      console.error('Error generating image:', error);
      alert('Failed to generate image. Please try again.');
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleUploadGeneratedImage = async () => {
    if (!generatedImageUrl) return;

    try {
      setIsUploadingGenerated(true);
      
      // Fetch the image from the URL via proxy to avoid CORS issues
      const response = await fetch(`/api/proxy-image?url=${encodeURIComponent(generatedImageUrl)}`);
      const blob = await response.blob();
      const file = new File([blob], `generated_${Date.now()}.png`, { type: 'image/png' });

      // Use the existing upload logic
      const storageRef = ref(storage, `blog-images/${Date.now()}_generated.png`);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);

      setNewBlog(prevState => ({
        ...prevState,
        image: downloadURL
      }));
      setImagePreview(downloadURL);
      setGeneratedImageUrl(null); // Clear the preview once uploaded
      alert('Image uploaded to Firebase successfully!');
    } catch (error) {
      console.error('Error uploading generated image:', error);
      alert('Failed to upload image to Firebase.');
    } finally {
      setIsUploadingGenerated(false);
    }
  };

  const handleExpandContent = async () => {
    if (!newBlog.description) {
      alert('Please have some content in the editor first.');
      return;
    }

    try {
      setIsExpanding(true);
      const response = await fetch('/api/expand-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          content: newBlog.description, 
          prompt: expansionPrompt 
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to expand content');
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No reader');

      let expandedContent = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        expandedContent += new TextDecoder().decode(value);
      }

      setNewBlog(prevState => ({
        ...prevState,
        description: expandedContent
      }));
      
      alert('Content expanded successfully! (Targeting 5000 words)');
    } catch (error) {
      console.error('Error expanding content:', error);
      alert('Failed to expand content.');
    } finally {
      setIsExpanding(false);
    }
  };
  
  // Helper function to compress images
  const compressImage = (file: File): Promise<File> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          
          // Calculate new dimensions while maintaining aspect ratio
          const MAX_WIDTH = 1200;
          const MAX_HEIGHT = 1200;
          
          if (width > height) {
            if (width > MAX_WIDTH) {
              height = Math.round(height * (MAX_WIDTH / width));
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width = Math.round(width * (MAX_HEIGHT / height));
              height = MAX_HEIGHT;
            }
          }
          
          canvas.width = width;
          canvas.height = height;
          
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);
          
          // Convert to blob with reduced quality
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error('Canvas to Blob conversion failed'));
                return;
              }
              
              const compressedFile = new File([blob], file.name, {
                type: 'image/jpeg',
                lastModified: Date.now(),
              });
              
              resolve(compressedFile);
            },
            'image/jpeg',
            0.7
          );
        };
        
        img.onerror = () => {
          reject(new Error('Error loading image for compression'));
        };
      };
      
      reader.onerror = () => {
        reject(new Error('Error reading file for compression'));
      };
    });
  };

  // Handle blog form submission
  const handleSubmitBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const blogWithMetadata = {
        ...newBlog,
        created: formMode === 'add' ? Date.now() : newBlog.created,
        date: new Date(newBlog.date).toISOString().split('T')[0]
      };
      
      const { faqs, reviews, ...blogData } = blogWithMetadata;
      let blogId = newBlog.id;
      
      if (formMode === 'add') {
        const docRef = await addDoc(collection(db, 'blogs'), blogData);
        blogId = docRef.id;
      } else {
        if (blogId) {
          const blogRef = doc(db, 'blogs', blogId);
          await updateDoc(blogRef, blogData);
        }
      }
      
      if (blogId && faqs && faqs.length > 0) {
        if (formMode === 'edit') {
          const faqsSnapshot = await getDocs(collection(db, 'blogs', blogId, 'faqs'));
          for (const doc of faqsSnapshot.docs) {
            await deleteDoc(doc.ref);
          }
        }
        for (const faq of faqs) {
          await addDoc(collection(db, 'blogs', blogId, 'faqs'), {
            question: faq.question,
            answer: faq.answer
          });
        }
      }

      if (blogId && reviews && reviews.length > 0) {
        if (formMode === 'edit') {
          const reviewsSnapshot = await getDocs(collection(db, 'blogs', blogId, 'reviews'));
          for (const doc of reviewsSnapshot.docs) {
            await deleteDoc(doc.ref);
          }
        }
        for (const review of reviews) {
          await addDoc(collection(db, 'blogs', blogId, 'reviews'), {
            name: review.name,
            rating: review.rating,
            review: review.review
          });
        }
      }
      
      resetForm();
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      const updatedBlogs = querySnapshot.docs.map(doc => {
        const docData = doc.data();
        return {
          id: doc.id,
          title: docData.title || '',
          subtitle: docData.subtitle || '',
          description: docData.description || '',
          date: docData.date || '',
          image: docData.image || '',
          created: docData.created || Date.now(),
          metaTitle: docData.metaTitle || '',
          metaDescription: docData.metaDescription || '',
          slug: docData.slug || '',
          faqs: [],
          reviews: [],
          author: docData.author || 'Anuj Anand Malik'
        };
      });
      setBlogs(updatedBlogs);
    } catch (error) {
      console.error("Error processing blog:", error);
    }
  };

  // Handle blog edit
  const handleEdit = async (blog: Blog) => {
    try {
      const faqsSnapshot = await getDocs(collection(db, 'blogs', blog.id!, 'faqs'));
      const faqs = faqsSnapshot.docs.map(doc => ({
        id: doc.id,
        question: doc.data().question || '',
        answer: doc.data().answer || ''
      }));
      
      const reviewsSnapshot = await getDocs(collection(db, 'blogs', blog.id!, 'reviews'));
      const reviews = reviewsSnapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name || '',
        rating: doc.data().rating || 5,
        review: doc.data().review || ''
      }));
      
      setNewBlog({...blog, faqs, reviews});
      setFormMode('edit');
      
      const savedDraft = localStorage.getItem(`autosave_blog_${blog.id}`);
      if (savedDraft) {
        if (window.confirm('Found an unsaved draft for this blog. Do you want to restore your edits?')) {
          setNewBlog(JSON.parse(savedDraft));
        } else {
          localStorage.removeItem(`autosave_blog_${blog.id}`);
        }
      }
      setShowBlogForm(true);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
      setNewBlog(blog);
      setFormMode('edit');
      setShowBlogForm(true); 
    }
  };
 
  // Handle blog delete
  const handleDelete = async (id: string | undefined) => {
    if (!id) return;
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        const blogDoc = await getDoc(doc(db, 'blogs', id));
        const blogData = blogDoc.data();
        if (blogData) {
          const content = blogData.description || '';
          const imgRegex = /<img[^>]+src="([^">]+)"/g;
          const imageUrls = new Set();
          let match;
          while ((match = imgRegex.exec(content)) !== null) {
            imageUrls.add(match[1]);
          }
          const imagesSnapshot = await getDocs(collection(db, 'blog_images'));
          const unusedImages = imagesSnapshot.docs.filter(doc => {
            const imageData = doc.data();
            return imageUrls.has(imageData.url);
          });
          for (const imageDoc of unusedImages) {
            const imageData = imageDoc.data();
            try {
              const imageRef = ref(storage, imageData.path);
              await deleteObject(imageRef);
              await deleteDoc(imageDoc.ref);
            } catch (error) {
              console.error(`Error deleting image ${imageData.filename}:`, error);
            }
          }
        }
        await deleteDoc(doc(db, 'blogs', id));
        setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id));
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    }
  };

  // Reset form state
  const resetForm = () => {
    if (formMode === 'edit' && newBlog.id) {
      localStorage.removeItem(`autosave_blog_${newBlog.id}`);
    } else {
      localStorage.removeItem('autosave_blog_new');
    }

    setNewBlog({
      title: '',
      subtitle: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
      image: '',
      created: Date.now(),
      metaTitle: '',
      metaDescription: '',
      slug: '',
      faqs: [],
      reviews: [],
      author: 'Anuj Anand Malik'
    });
    setFormMode('add');
    setShowBlogForm(false);
    setImagePreview(null);
  };

  const handleCancelForm = () => {
    resetForm();
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const testRssFeed = async () => {
    try {
      setIsLoadingRss(true);
      const response = await fetch('/api/rss');
      if (!response.ok) {
        throw new Error(`RSS feed returned status: ${response.status}`);
      }
      const xml = await response.text();
      const isValidXml = xml.includes('<?xml version="1.0"') && xml.includes('<rss version="2.0"') && xml.includes('</rss>');
      const itemCount = (xml.match(/<item>/g) || []).length;
      
      setRssDebugInfo(
        `RSS Feed Status: ${response.status === 200 ? '✅ OK' : '❌ Error'}\n` +
        `Valid XML Structure: ${isValidXml ? '✅ Yes' : '❌ No'}\n` +
        `Items in Feed: ${itemCount}\n\n` +
        `Sample XML (first 500 chars):\n${xml.substring(0, 500)}...`
      );
    } catch (error) {
      console.error('Error testing RSS feed:', error);
      setRssDebugInfo(`Error testing RSS feed: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsLoadingRss(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex-1 p-0 relative z-10">
        <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-brand-blue tracking-tight">Blogs Dashboard</h1>
            <p className="text-gray-500 mt-2 text-lg font-medium">Manage and publish your blog articles.</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm"
        >
          <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-50">
            <h2 className="text-2xl font-bold text-brand-blue tracking-tight">
              {showBlogForm ? (formMode === 'add' ? 'Create New Blog' : 'Edit Blog') : 'Recent Articles'}
            </h2>
            <motion.button
              onClick={() => {
                if (showBlogForm) {
                  resetForm();
                } else {
                  setFormMode('add');
                  const savedDraft = localStorage.getItem('autosave_blog_new');
                  if (savedDraft) {
                    if (window.confirm('Found an unsaved draft. Do you want to restore it?')) {
                      setNewBlog(JSON.parse(savedDraft));
                    } else {
                      localStorage.removeItem('autosave_blog_new');
                    }
                  }
                  setShowBlogForm(true);
                }
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide transition-all ${
                showBlogForm 
                  ? 'bg-gray-100 text-brand-blue hover:bg-gray-200' 
                  : 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20 hover:bg-brand-orange-hover'
              }`}
            >
              <FontAwesomeIcon icon={showBlogForm ? faChartLine : faPlus} className="mr-2" />
              {showBlogForm ? 'Back to List' : 'Add Article'}
            </motion.button>
          </div>

          <AnimatePresence mode="wait">
            {showBlogForm ? (
              <motion.div
                key="blog-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <form 
                  onSubmit={handleSubmitBlog}
                  className="space-y-8"
                >
                  <div className="bg-brand-orange/5 p-6 rounded-xl border border-brand-orange/10 mb-8 space-y-6">
                    <h3 className="text-brand-orange font-bold text-sm uppercase tracking-widest flex items-center">
                      <FontAwesomeIcon icon={faMagic} className="mr-2" />
                      AI Content Studio
                    </h3>
                    
                    {/* Article Generation Row */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                      <div className="md:col-span-3">
                        <label className="block text-[10px] font-bold text-brand-orange/60 uppercase tracking-widest mb-1.5 ml-1">Article Concept / Keywords</label>
                        <input
                          type="text"
                          value={primaryKeyword}
                          onChange={(e) => setPrimaryKeyword(e.target.value)}
                          placeholder="e.g., 'Advancements in Industrial Laundry Tech'"
                          className="text-black w-full px-4 py-3 bg-white border border-brand-orange/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/40 text-sm font-medium transition-all"
                          disabled={isGenerating}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className="bg-brand-orange text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-orange-hover disabled:bg-brand-orange/40 transition-all flex items-center justify-center shadow-lg shadow-brand-orange/10 text-sm"
                      >
                        {isGenerating ? 'Drafting...' : 'Generate Article'}
                      </button>
                    </div>

                    {/* Image Generation Row */}
                    <div className="pt-6 border-t border-brand-orange/10">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
                        <div className="md:col-span-3 space-y-4">
                          <div>
                            <label className="block text-[10px] font-bold text-brand-orange/60 uppercase tracking-widest mb-1.5 ml-1">Visual Concept / Image Prompt</label>
                            <textarea
                              value={imagePrompt}
                              onChange={(e) => setImagePrompt(e.target.value)}
                              placeholder="Describe the desired visual for your blog post..."
                              rows={2}
                              className="text-black w-full px-4 py-3 bg-white border border-brand-orange/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/40 text-sm font-medium transition-all resize-none"
                              disabled={isGeneratingImage}
                            />
                          </div>
                          
                          {generatedImageUrl && (
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="bg-white p-3 rounded-xl border border-brand-orange/10 flex items-center space-x-4 shadow-sm"
                            >
                              <img src={generatedImageUrl} alt="AI Preview" className="w-24 h-24 rounded-lg object-cover border border-gray-100" />
                              <div className="flex-1">
                                <p className="text-xs font-bold text-brand-blue uppercase tracking-tight mb-2">Image Generated Successfully</p>
                                <button
                                  type="button"
                                  onClick={handleUploadGeneratedImage}
                                  disabled={isUploadingGenerated}
                                  className="px-4 py-2 bg-brand-blue text-white rounded-lg text-xs font-bold hover:bg-brand-blue/90 transition-all flex items-center"
                                >
                                  <FontAwesomeIcon icon={faUpload} className="mr-2" />
                                  {isUploadingGenerated ? 'Adding...' : 'Add as Featured Image'}
                                </button>
                              </div>
                            </motion.div>
                          )}
                        </div>
                        
                        <button
                          type="button"
                          onClick={handleGenerateImage}
                          disabled={isGeneratingImage}
                          className="bg-brand-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-blue/90 disabled:bg-brand-blue/40 transition-all flex items-center justify-center shadow-lg shadow-brand-blue/10 text-sm mt-5"
                        >
                          {isGeneratingImage ? 'Visualizing...' : 'Generate Visual'}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="title" className="block text-sm font-bold text-brand-blue uppercase tracking-widest mb-2">Headline</label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={newBlog.title}
                        onChange={handleInputChange}
                        required
                        className="text-black w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="slug" className="block text-sm font-bold text-brand-blue uppercase tracking-widest mb-2">Permalink</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">/blog/</span>
                        <input
                          type="text"
                          id="slug"
                          name="slug"
                          value={newBlog.slug}
                          onChange={handleInputChange}
                          required
                          className="text-black w-full pl-16 pr-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="subtitle" className="block text-sm font-bold text-brand-blue uppercase tracking-widest mb-2">Explanatory Subtitle</label>
                      <input
                        type="text"
                        id="subtitle"
                        name="subtitle"
                        value={newBlog.subtitle}
                        onChange={handleInputChange}
                        className="text-black w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-sm font-bold text-brand-blue uppercase tracking-widest mb-2">Publish Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={newBlog.date}
                        onChange={handleInputChange}
                        required
                        className="text-black w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-brand-blue uppercase tracking-widest mb-2">Featured Image</label>
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center space-x-4">
                        <input
                          type="file"
                          ref={fileInputRef}
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="px-6 py-3 bg-gray-50 text-brand-blue border border-gray-200 rounded-xl text-sm font-bold flex items-center hover:bg-gray-100 transition-all"
                        >
                          <FontAwesomeIcon icon={faUpload} className="mr-2" />
                          {uploading ? 'Processing File...' : 'Upload Asset'}
                        </button>
                      </div>
                      {(imagePreview || newBlog.image) && (
                        <div className="relative w-48 h-32 group">
                          <img 
                            src={imagePreview || newBlog.image} 
                            alt="Preview" 
                            className="w-full h-full object-cover rounded-xl border border-gray-100 shadow-sm"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-brand-blue uppercase tracking-widest mb-2">Body Content</label>
                    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                      <TiptapEditor
                        content={newBlog.description}
                        onChange={handleEditorChange}
                        className="bg-white text-black min-h-[600px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* FAQ Section */}
                    <div className="space-y-6 pt-8 border-t border-gray-50">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-bold text-brand-blue tracking-tight">Structured FAQs</h3>
                          <p className="text-xs text-gray-500 mt-1">Boost SEO with answered questions.</p>
                        </div>
                        <button
                          type="button"
                          onClick={addFaq}
                          className="px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-brand-orange/20 transition-all"
                        >
                          <FontAwesomeIcon icon={faPlus} className="mr-2" />
                          Add Row
                        </button>
                      </div>
                      <div className="space-y-4">
                        {newBlog.faqs?.map((faq, index) => (
                          <div key={`faq-${index}`} className="p-6 bg-gray-50 rounded-xl border border-gray-100 space-y-3 relative group">
                            <button
                              type="button"
                              onClick={() => removeFaq(index)}
                              className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                            <input
                              type="text"
                              placeholder="Question Topic"
                              value={faq.question}
                              onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                              className="text-black w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
                            />
                            <textarea
                              placeholder="Detailed Response"
                              value={faq.answer}
                              onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                              rows={3}
                              className="text-black w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Review Section */}
                    <div className="space-y-6 pt-8 border-t border-gray-50">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-bold text-brand-blue tracking-tight">Client Testimonials</h3>
                          <p className="text-xs text-gray-500 mt-1">Display authentic user feedback.</p>
                        </div>
                        <button
                          type="button"
                          onClick={addReview}
                          className="px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-brand-orange/20 transition-all"
                        >
                          <FontAwesomeIcon icon={faPlus} className="mr-2" />
                          Add Row
                        </button>
                      </div>
                      <div className="space-y-4">
                        {newBlog.reviews?.map((review, index) => (
                          <div key={`review-${index}`} className="p-6 bg-gray-50 rounded-xl border border-gray-100 space-y-3 relative group">
                            <button
                              type="button"
                              onClick={() => removeReview(index)}
                              className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                            <div className="grid grid-cols-2 gap-4">
                              <input
                                type="text"
                                placeholder="Reviewer Display Name"
                                value={review.name}
                                onChange={(e) => handleReviewChange(index, 'name', e.target.value)}
                                className="text-black w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
                              />
                              <select
                                value={review.rating}
                                onChange={(e) => handleReviewChange(index, 'rating', parseInt(e.target.value))}
                                className="text-black w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
                              >
                                {[5,4,3,2,1].map(r => <option key={r} value={r}>{r} Stars</option>)}
                              </select>
                            </div>
                            <textarea
                              placeholder="Testimonial Quote"
                              value={review.review}
                              onChange={(e) => handleReviewChange(index, 'review', e.target.value)}
                              rows={3}
                              className="text-black w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-4 pt-10 border-t border-gray-50">
                    <button
                      type="button"
                      onClick={handleCancelForm}
                      className="px-8 py-3 bg-white text-gray-500 font-bold rounded-xl border border-gray-200 hover:bg-gray-50 transition-all"
                    >
                      Discard Changes
                    </button>
                    <button
                      type="submit"
                      className="px-10 py-3 bg-brand-blue text-white font-bold rounded-xl hover:bg-brand-blue-muted transition-all shadow-lg shadow-brand-blue/10"
                    >
                      {formMode === 'add' ? 'Publish Now' : 'Save Updates'}
                    </button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="blog-list"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm">
                  <table className="min-w-full divide-y divide-gray-100">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Date Published</th>
                        <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Article Title</th>
                        <th className="px-8 py-4 text-right text-xs font-bold text-gray-400 uppercase tracking-widest">Management</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-50">
                      {currentBlogs.length > 0 ? (
                        currentBlogs.map((blog, index) => (
                          <tr key={blog.id || index} className="hover:bg-gray-50/50 transition-colors group">
                            <td className="px-8 py-5 text-sm text-gray-500 font-medium">{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                            <td className="px-8 py-5 text-sm font-bold text-brand-blue">{blog.title}</td>
                            <td className="px-8 py-5 text-right">
                              <div className="flex justify-end space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button onClick={() => handleEdit(blog)} className="text-gray-400 hover:text-brand-orange transition-colors" title="Edit">
                                  <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button onClick={() => handleDelete(blog.id)} className="text-gray-400 hover:text-red-500 transition-colors" title="Delete">
                                  <FontAwesomeIcon icon={faTrash} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={3} className="px-8 py-10 text-center text-sm text-gray-400 font-medium italic">No articles found in repository.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 flex justify-between items-center text-sm">
                  <div className="text-gray-400 font-medium uppercase tracking-widest text-[10px]">Registry Total: {blogs.length} Blogs</div>
                  <div className="flex space-x-2">
                    <button onClick={handlePreviousPage} disabled={currentPage === 1} className="px-5 py-2 bg-white text-brand-blue font-bold rounded-lg border border-gray-100 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all">Prev</button>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-5 py-2 bg-white text-brand-blue font-bold rounded-lg border border-gray-100 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all">Next</button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogsDashboard;
