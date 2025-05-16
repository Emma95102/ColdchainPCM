const { initializeApp } = require('firebase/app');
const { getFirestore, collection, setDoc, doc } = require('firebase/firestore');
const firebaseConfig = {
  apiKey: "AIzaSyD12I3-14MCI6TrJpjlCblkj4I4RYgE58k",
  authDomain: "pcmdatabase-d765f.firebaseapp.com",
  projectId: "pcmdatabase-d765f",
  storageBucket: "pcmdatabase-d765f.firebasestorage.app",
  messagingSenderId: "434039819276",
  appId: "1:434039819276:web:36b24ee6aa883ad19e7229"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const modules = [
  {
    moduleId: "PCM001",
    coolingPercentage: 85,
    lastPrecoolTime: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    coolingDurationHours: 6,
  },
  {
    moduleId: "PCM002",
    coolingPercentage: 45,
    lastPrecoolTime: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString(),
    coolingDurationHours: 6,
  },
  {
    moduleId: "PCM003",
    coolingPercentage: 20,
    lastPrecoolTime: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    coolingDurationHours: 3,
  }
];

async function initModules() {
  const colRef = collection(db, 'pcm_modules');
  for (const mod of modules) {
    await setDoc(doc(colRef, mod.moduleId), mod);
  }
  console.log('✅ 已建立模組狀態資料！');
}

initModules();
