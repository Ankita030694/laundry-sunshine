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

async function run() {
    console.log("Searching Firestore blogs for links or references to 'understanding-hello'...");
    try {
        const blogsCollection = collection(db, "blogs");
        const querySnapshot = await getDocs(blogsCollection);
        
        let foundCount = 0;
        for (const document of querySnapshot.docs) {
            const data = document.data();
            const dataStr = JSON.stringify(data);
            if (dataStr.toLowerCase().includes("understanding-hello")) {
                console.log(`Match found in blog!`);
                console.log(`- ID: ${document.id}`);
                console.log(`- Slug: ${data.slug}`);
                console.log(`- Title: ${data.title}`);
                
                // Inspect which fields contain the reference
                for (const [key, value] of Object.entries(data)) {
                    const valStr = JSON.stringify(value);
                    if (valStr.toLowerCase().includes("understanding-hello")) {
                        console.log(`  -> Field '${key}' contains reference`);
                    }
                }
                foundCount++;
            }
        }
        console.log(`Search completed. Found ${foundCount} matching blog posts.`);
    } catch (error) {
        console.error("Error running script:", error);
    }
    process.exit(0);
}

run();
