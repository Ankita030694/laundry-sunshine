const fs = require('fs');
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');

const firebaseConfig = {
    projectId: "laundry-sunshine",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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

async function generate() {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Static
    staticRoutes.forEach(route => {
        xml += '  <url>\n';
        xml += `    <loc>${baseUrl}${route}</loc>\n`;
        xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
        xml += '    <changefreq>weekly</changefreq>\n';
        xml += `    <priority>${route === '' ? '1.0' : '0.8'}</priority>\n`;
        xml += '  </url>\n';
    });

    // Blogs from Firebase
    try {
        const querySnapshot = await getDocs(collection(db, 'blogs'));
        querySnapshot.forEach(doc => {
            const data = doc.data();
            if (data.slug) {
                xml += '  <url>\n';
                xml += `    <loc>${baseUrl}/blog/${data.slug.trim()}</loc>\n`;
                const date = data.created ? new Date(data.created) : new Date();
                xml += `    <lastmod>${date.toISOString().split('T')[0]}</lastmod>\n`;
                xml += '    <changefreq>monthly</changefreq>\n';
                xml += '    <priority>0.7</priority>\n';
                xml += '  </url>\n';
            }
        });
    } catch (e) {
        console.error('Firebase fetch failed, skipping blogs', e);
    }

    xml += '</urlset>';

    fs.writeFileSync('public/sitemap.xml', xml);
    console.log('Static sitemap generated successfully.');
    process.exit(0);
}

generate();
