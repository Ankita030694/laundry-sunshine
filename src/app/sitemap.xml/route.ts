import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'

export async function GET(): Promise<Response> {
    const blogs = await fetchAllBlogs()

    const baseUrl = 'https://www.laundryamc.com'

    // Build static routes matching the ones we had
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
        url: \`\${baseUrl}\${route}\`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8
  }))

  const blogRoutes = blogs.map(blog => ({
    url: \`\${baseUrl}/blog/\${blog.slug}\`,
    lastModified: new Date(blog.created || Date.now()).toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7
  }))

  // Combine all routes
  const allRoutes = [...staticRoutes, ...blogRoutes]

  // Generate XML
  const xml = \`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  \${allRoutes.map(route => \`
    <url>
      <loc>\${route.url}</loc>
      <lastmod>\${route.lastModified}</lastmod>
      <changefreq>\${route.changeFrequency}</changefreq>
      <priority>\${route.priority}</priority>
    </url>
  \`).join('')}
</urlset>\`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
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
