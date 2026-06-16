const slugs = [
  "mastering-lagoon-advanced-care",
  "buy-commercial-washer-dryer-india",
  "commercial-laundry-services-india",
  "electrolux-dealers-delhi-sunshine-equipment-inc-co",
  "laundry-machine-amc-delhi",
  "laundromat-setup-in-india",
  "best-commercial-machine-repair-in-delhi",
  "enhance-laundry-business-washing-machines-15kg-100kg"
];

const targetPattern = "understanding-hello";

async function run() {
    console.log("Crawling all 8 public blog posts...");
    for (const slug of slugs) {
        const url = `https://www.laundryamc.com/blog/${slug}`;
        console.log(`Checking: ${url}`);
        try {
            const res = await fetch(url);
            if (!res.ok) {
                console.log(`  -> Failed to fetch. Status: ${res.status}`);
                continue;
            }
            const text = await res.text();
            if (text.toLowerCase().includes(targetPattern)) {
                console.log(`  *** MATCH FOUND IN BLOG POST: ${slug} ***`);
                
                // Let's print some context around the match
                const idx = text.toLowerCase().indexOf(targetPattern);
                const start = Math.max(0, idx - 200);
                const end = Math.min(text.length, idx + 200);
                console.log(`  Context: ... ${text.substring(start, end).replace(/\s+/g, ' ')} ...`);
            }
        } catch (error) {
            console.error(`  -> Error: ${error.message}`);
        }
    }
    console.log("Crawl completed.");
}

run();
