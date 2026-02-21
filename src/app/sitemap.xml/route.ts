import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
    const blogs = await fetchAllBlogs()
    const baseUrl = 'https://www.laundryamc.com'

    const staticRoutes = [
        '',
        '/about',
        '/services',
        '/laundry-equipment-for-hotels',
        '/laundry-equipment-for-hospitals',
        '/industries/hospitals',
        '/industries/hotels',
        '/commercial-laundry-equipment-supplier',
        '/industrial-washing-machine-installation',
        '/laundry-equipment-maintenance-services',
        '/after-sales-support-for-laundry-machines',
        '/laundry-equipment-spare-parts-supplier',
        '/hotel-laundry-equipment-solutions',
        '/hospital-laundry-systems-provider',
        '/laundromat-equipment-supplier',
        '/healthcare-laundry-equipment-maintenance',
        '/hospitality-laundry-solutions',
        '/commercial-laundry-equipment-gurgaon',
        '/laundry-machine-suppliers-delhi-ncr',
        '/industrial-laundry-solutions-india',
        '/laundry-equipment-installation-services-delhi',
        '/laundry-equipment-maintenance-gurgaon',
        '/laundry-machine-preventive-maintenance',
        '/oem-laundry-equipment-parts',
        '/laundry-equipment-troubleshooting-services',
        '/energy-efficient-laundry-systems',
        '/smart-laundry-equipment-solutions',
        '/laundromat-washer-dryer-servicing',
        '/technical-support-for-laundromat-operations',
        '/energy-efficient-laundromat-solutions',
        '/lagoon-advanced-care-services',
        '/on-site-laundry-equipment-repair-gurgaon',
        '/industrial-washer-dryer-replacement-parts',
        '/high-usage-laundromat-maintenance',
        '/laundry-chemical-dosing-maintenance',
        '/washer-extractor-dryer-servicing-delhi-ncr',
        '/laundry-infrastructure-development',
        '/blog',
        '/brands/electrolux',
        '/locations/delhi'
    ].map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'weekly',
        priority: route === '' ? '1.0' : '0.8'
    }))

    /* 
  const blogRoutes = blogs.map(blog => ({
    url: `${baseUrl}/blog/${(blog.slug || '').trim()}`,
    lastModified: new Date(blog.created || Date.now()).toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: '0.7'
  }))
  */

    const allRoutes = [...staticRoutes] // Temporary: Removed ...blogRoutes

    const xmlContent = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...allRoutes.map(route =>
            '  <url>\n' +
            `    <loc>${route.url}</loc>\n` +
            `    <lastmod>${route.lastModified}</lastmod>\n` +
            `    <changefreq>${route.changeFrequency}</changefreq>\n` +
            `    <priority>${route.priority}</priority>\n` +
            '  </url>'
        ),
        '</urlset>'
    ].join('\n')

    return new Response(xmlContent, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=0, must-revalidate'
        }
    })
}

// Helper function to fetch blogs
async function fetchAllBlogs() {
    try {
        const querySnapshot = await getDocs(collection(db, 'blogs'))
        return querySnapshot.docs.map(doc => {
            const data = doc.data()
            return {
                slug: data.slug,
                created: data.created || Date.now()
            }
        })
    } catch (error) {
        console.error('Error fetching blogs:', error)
        return []
    }
}
