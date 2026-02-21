const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');

const firebaseConfig = {
    projectId: "laundry-sunshine",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function check() {
  const querySnapshot = await getDocs(collection(db, 'blogs'));
  const slugs = querySnapshot.docs.map(doc => doc.data().slug);
  console.log(JSON.stringify(slugs));
  process.exit(0);
}
check();
