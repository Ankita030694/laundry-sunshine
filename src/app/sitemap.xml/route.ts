import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

const baseUrl = 'https://www.laundryamc.com';

const staticRoutes = [
    '', '/about', '/services',
    '/laundry-equipment-for-hotels', '/laundry-equipment-for-hospitals',
    '/industries/hospitals', '/industries/hotels',
    '/commercial-laundry-equipment-supplier', '/industrial-washing-machine-installation',
    '/laundry-equipment-maintenance-services', '/after-sales-support-for-laundry-machines',
    '/laundry-equipment-spare-parts-supplier', '/hotel-laundry-equipment-solutions',
    '/hospital-laundry-systems-provider', '/laundromat-equipment-supplier',
    '/healthcare-laundry-equipment-maintenance', '/hospitality-laundry-solutions',
    '/commercial-laundry-equipment-gurgaon', '/laundry-machine-suppliers-delhi-ncr',
    '/industrial-laundry-solutions-india', '/laundry-equipment-installation-services-delhi',
    '/laundry-equipment-maintenance-gurgaon', '/laundry-machine-preventive-maintenance',
    '/oem-laundry-equipment-parts', '/laundry-equipment-troubleshooting-services',
    '/energy-efficient-laundry-systems', '/smart-laundry-equipment-solutions',
    '/laundromat-washer-dryer-servicing', '/technical-support-for-laundromat-operations',
    '/energy-efficient-laundromat-solutions', '/lagoon-advanced-care-services',
    '/on-site-laundry-equipment-repair-gurgaon', '/industrial-washer-dryer-replacement-parts',
    '/high-usage-laundromat-maintenance', '/laundry-chemical-dosing-maintenance',
    '/washer-extractor-dryer-servicing-delhi-ncr', '/laundry-infrastructure-development',
    '/blog', '/brands/electrolux', '/locations/delhi'
];

export async function GET() {
    try {
        // Fetch blog posts from Firebase
        const blogsCollection = collection(db, 'blogs');
        const q = query(blogsCollection, orderBy('created', 'desc'));
        const querySnapshot = await getDocs(q);

        const dynamicRoutes = querySnapshot.docs.map(doc => {
            const data = doc.data();
            let lastmod = new Date().toISOString().split('T')[0];

            if (data.created) {
                // Handle Firestore Timestamp or Date object/string
                const date = data.created.toDate ? data.created.toDate() : new Date(data.created);
                if (!isNaN(date.getTime())) {
                    lastmod = date.toISOString().split('T')[0];
                }
            }

            return {
                url: `/blog/${data.slug}`,
                lastmod
            };
        });

        // Start XML generation
        let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
        xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

        // Add Static Routes
        staticRoutes.forEach(route => {
            const priority = route === '' ? '1.0' : route === '/blog' ? '0.9' : '0.8';
            xml += '  <url>\n';
            xml += `    <loc>${baseUrl}${route}</loc>\n`;
            xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
            xml += '    <changefreq>weekly</changefreq>\n';
            xml += `    <priority>${priority}</priority>\n`;
            xml += '  </url>\n';
        });

        // Add Dynamic Blog Routes
        dynamicRoutes.forEach(route => {
            if (route.url && !route.url.includes('undefined')) {
                xml += '  <url>\n';
                xml += `    <loc>${baseUrl}${route.url}</loc>\n`;
                xml += `    <lastmod>${route.lastmod}</lastmod>\n`;
                xml += '    <changefreq>weekly</changefreq>\n';
                xml += '    <priority>0.7</priority>\n';
                xml += '  </url>\n';
            }
        });

        xml += '</urlset>';

        return new Response(xml, {
            headers: {
                'Content-Type': 'application/xml; charset=utf-8',
                'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
            },
        });
    } catch (error) {
        console.error('Error generating dynamic sitemap:', error);
        // Fallback to static routes if Firebase fails
        let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
        xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
        staticRoutes.forEach(route => {
            xml += '  <url>\n';
            xml += `    <loc>${baseUrl}${route}</loc>\n`;
            xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
            xml += '  </url>\n';
        });
        xml += '</urlset>';

        return new Response(xml, {
            headers: {
                'Content-Type': 'application/xml; charset=utf-8',
            },
        });
    }
}
