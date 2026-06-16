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
    console.log("Listing all blogs in collection 'blogs'...");
    try {
        const blogsCollection = collection(db, "blogs");
        const querySnapshot = await getDocs(blogsCollection);
        
        console.log(`Total blogs found: ${querySnapshot.size}`);
        for (const document of querySnapshot.docs) {
            const data = document.data();
            console.log(`- ID: ${document.id} | Slug: "${data.slug}" | Title: "${data.title}"`);
        }
    } catch (error) {
        console.error("Error running script:", error);
    }
    process.exit(0);
}

run();
