const projects = [
  "amacrm-76fd1",
  "amalegal-app",
  "amalegalsolutionss",
  "cedar-53136",
  "credsettle-app",
  "credsettlee",
  "dejabrew-ecef5",
  "eams-4c812",
  "farzicafee",
  "globatonn",
  "iprkaro-729d3",
  "jivoenergy",
  "jivosol",
  "laundry-sunshine",
  "mammakilla-435db",
  "masalalibraryy",
  "misht-430de",
  "selah-1020a",
  "settle-loan"
];

async function run() {
    console.log("Searching all 19 projects via Firestore REST API...");
    for (const project of projects) {
        const url = `https://firestore.googleapis.com/v1/projects/${project}/databases/(default)/documents/blogs?pageSize=100`;
        try {
            const res = await fetch(url);
            if (!res.ok) {
                if (res.status !== 404 && res.status !== 403) {
                    console.log(`[${project}] HTTP Error ${res.status}`);
                }
                continue;
            }
            const data = await res.json();
            if (data.documents && data.documents.length > 0) {
                console.log(`[${project}] Found ${data.documents.length} blog documents.`);
                for (const doc of data.documents) {
                    const fields = doc.fields || {};
                    const slug = fields.slug?.stringValue || "";
                    const title = fields.title?.stringValue || "";
                    const name = doc.name.split('/').pop(); // Document ID
                    
                    console.log(`  -> ID: ${name} | Slug: "${slug}" | Title: "${title}"`);
                    if (slug === "understanding-hello-comprehensive-legal-guide") {
                        console.log(`  *** MATCH FOUND IN PROJECT: ${project} ***`);
                    }
                }
            }
        } catch (error) {
            console.error(`[${project}] Fetch error: ${error.message}`);
        }
    }
    console.log("Search completed.");
}

run();
