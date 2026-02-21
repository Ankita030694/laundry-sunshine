const fs = require('fs');

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
    
    // This connects the custom stylesheet so the browser displays it as a table, not a paragraph
    xml += '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n';
    
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Output all static routes
    staticRoutes.forEach(route => {
        xml += '  <url>\n';
        xml += `    <loc>${baseUrl}${route}</loc>\n`;
        xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
        xml += '    <changefreq>weekly</changefreq>\n';
        xml += `    <priority>${route === '' ? '1.0' : '0.8'}</priority>\n`;
        xml += '  </url>\n';
    });

    xml += '</urlset>';

    fs.writeFileSync('public/sitemap_0.xml', xml);
    console.log('Static XML tree sitemap generated successfully at public/sitemap_0.xml');
    process.exit(0);
}

generate();
