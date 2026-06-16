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

const docId = "ydiNS9fPiNy8cmL4Vnp4";

async function run() {
    console.log(`Searching for document ID "${docId}" across all 19 projects...`);
    for (const project of projects) {
        const url = `https://firestore.googleapis.com/v1/projects/${project}/databases/(default)/documents/blogs/${docId}`;
        try {
            const res = await fetch(url);
            if (res.ok) {
                const data = await res.json();
                console.log(`\n*** FOUND DOCUMENT IN PROJECT: ${project} ***`);
                console.log(`Slug: "${data.fields?.slug?.stringValue}"`);
                console.log(`Title: "${data.fields?.title?.stringValue}"`);
            } else if (res.status !== 404 && res.status !== 403) {
                console.log(`[${project}] HTTP Error ${res.status}`);
            }
        } catch (error) {
            console.error(`[${project}] Fetch error: ${error.message}`);
        }
    }
    console.log("Search completed.");
}

run();
