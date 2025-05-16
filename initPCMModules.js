// src/initPCMModules.js
import { db } from './firebaseConfig';
import { collection, setDoc, doc } from 'firebase/firestore';

const modules = [
  {
    moduleId: "PCM001",
    coolingPercentage: 85,
    lastPrecoolTime: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2小時前
    coolingDurationHours: 6,
  },
  {
    moduleId: "PCM002",
    coolingPercentage: 45,
    lastPrecoolTime: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString(), // 7小時前
    coolingDurationHours: 6,
  },
  {
    moduleId: "PCM003",
    coolingPercentage: 20,
    lastPrecoolTime: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1小時前
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
