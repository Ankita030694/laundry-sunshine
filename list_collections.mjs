import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAfPG-YhwqFWxNkqs0JgpIJ8rZO0jVRmfI",
    authDomain: "laundry-sunshine.firebaseapp.com",
    projectId: "laundry-sunshine",
    storageBucket: "laundry-sunshine.firebasestorage.app",
    messagingSenderId: "698578150480",
    appId: "1:698578150480:web:2347f09b80ecfc84a4dd55",
    measurementId: "G-BHD6B6VHYL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// In Client SDK, we cannot easily list collections directly without firebase-admin,
// but we can query known collections or check if there is an admin SDK configuration.
// Let's first check if there are other common collections or if we can use firebase-admin.
// Wait! Let's see if firebase-admin is installed in package.json.
// Looking at package.json: firebase is installed, but firebase-admin is not.
// However, let's write a script that queries known collections like 'blogs', 'leads', 'users', etc.
// Let's also write a search that check if we can import firebase-admin.
// If firebase-admin is not installed, we can try to install it or use the REST API/gcloud.

async function run() {
    const knownCollections = ["blogs", "leads", "users", "settings", "pages"];
    console.log("Searching Firestore in known collections...");
    
    for (const colName of knownCollections) {
        try {
            console.log(`Checking collection '${colName}'...`);
            const colRef = collection(db, colName);
            const querySnapshot = await getDocs(colRef);
            console.log(`  -> Found ${querySnapshot.size} documents.`);
            for (const doc of querySnapshot.docs) {
                const data = doc.data();
                const dataStr = JSON.stringify(data);
                if (dataStr.toLowerCase().includes("understanding-hello")) {
                    console.log(`  *** FOUND REFERENCE in collection '${colName}', document ID: ${doc.id}`);
                    console.log(JSON.stringify(data, null, 2));
                }
            }
        } catch (e) {
            console.log(`  -> Collection '${colName}' not found or error: ${e.message}`);
        }
    }
    process.exit(0);
}

run();
