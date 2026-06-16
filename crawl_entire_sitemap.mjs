const urls = [
  "https://www.laundryamc.com",
  "https://www.laundryamc.com/about",
  "https://www.laundryamc.com/services",
  "https://www.laundryamc.com/laundry-equipment-for-hotels",
  "https://www.laundryamc.com/laundry-equipment-for-hospitals",
  "https://www.laundryamc.com/industries/hospitals",
  "https://www.laundryamc.com/industries/hotels",
  "https://www.laundryamc.com/commercial-laundry-equipment-supplier",
  "https://www.laundryamc.com/industrial-washing-machine-installation",
  "https://www.laundryamc.com/laundry-equipment-maintenance-services",
  "https://www.laundryamc.com/after-sales-support-for-laundry-machines",
  "https://www.laundryamc.com/laundry-equipment-spare-parts-supplier",
  "https://www.laundryamc.com/hotel-laundry-equipment-solutions",
  "https://www.laundryamc.com/hospital-laundry-systems-provider",
  "https://www.laundryamc.com/laundromat-equipment-supplier",
  "https://www.laundryamc.com/healthcare-laundry-equipment-maintenance",
  "https://www.laundryamc.com/hospitality-laundry-solutions",
  "https://www.laundryamc.com/commercial-laundry-equipment-gurgaon",
  "https://www.laundryamc.com/laundry-machine-suppliers-delhi-ncr",
  "https://www.laundryamc.com/industrial-laundry-solutions-india",
  "https://www.laundryamc.com/laundry-equipment-installation-services-delhi",
  "https://www.laundryamc.com/laundry-equipment-maintenance-gurgaon",
  "https://www.laundryamc.com/laundry-machine-preventive-maintenance",
  "https://www.laundryamc.com/oem-laundry-equipment-parts",
  "https://www.laundryamc.com/laundry-equipment-troubleshooting-services",
  "https://www.laundryamc.com/energy-efficient-laundry-systems",
  "https://www.laundryamc.com/smart-laundry-equipment-solutions",
  "https://www.laundryamc.com/laundromat-washer-dryer-servicing",
  "https://www.laundryamc.com/technical-support-for-laundromat-operations",
  "https://www.laundryamc.com/energy-efficient-laundromat-solutions",
  "https://www.laundryamc.com/lagoon-advanced-care-services",
  "https://www.laundryamc.com/on-site-laundry-equipment-repair-gurgaon",
  "https://www.laundryamc.com/industrial-washer-dryer-replacement-parts",
  "https://www.laundryamc.com/high-usage-laundromat-maintenance",
  "https://www.laundryamc.com/laundry-chemical-dosing-maintenance",
  "https://www.laundryamc.com/washer-extractor-dryer-servicing-delhi-ncr",
  "https://www.laundryamc.com/laundry-infrastructure-development",
  "https://www.laundryamc.com/blog",
  "https://www.laundryamc.com/brands/electrolux",
  "https://www.laundryamc.com/locations/delhi",
  "https://www.laundryamc.com/terms",
  "https://www.laundryamc.com/privacy",
  "https://www.laundryamc.com/blog/electrolux-dealers-delhi-sunshine-equipment-inc-co",
  "https://www.laundryamc.com/blog/best-commercial-machine-repair-in-delhi",
  "https://www.laundryamc.com/blog/commercial-laundry-services-india",
  "https://www.laundryamc.com/blog/enhance-laundry-business-washing-machines-15kg-100kg",
  "https://www.laundryamc.com/blog/laundry-machine-amc-delhi",
  "https://www.laundryamc.com/blog/laundromat-setup-in-india",
  "https://www.laundryamc.com/blog/mastering-lagoon-advanced-care",
  "https://www.laundryamc.com/blog/buy-commercial-washer-dryer-india"
];

const targetPattern = "understanding-hello";

async function run() {
    console.log(`Crawling all ${urls.length} sitemap URLs...`);
    for (const url of urls) {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                console.log(`[${url}] Failed to fetch. Status: ${res.status}`);
                continue;
            }
            const text = await res.text();
            if (text.toLowerCase().includes(targetPattern)) {
                console.log(`\n*** MATCH FOUND IN URL: ${url} ***`);
                const idx = text.toLowerCase().indexOf(targetPattern);
                const start = Math.max(0, idx - 150);
                const end = Math.min(text.length, idx + 150);
                console.log(`Context: ... ${text.substring(start, end).replace(/\s+/g, ' ')} ...\n`);
            }
        } catch (error) {
            console.error(`[${url}] Error: ${error.message}`);
        }
    }
    console.log("Crawl completed.");
}

run();
