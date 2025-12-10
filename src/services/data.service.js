import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  getDoc,
  query,
  where,
  limit,
} from "firebase/firestore";

import { db } from "./firebase.config";

export const createItem = async (collectionName, data) => {
  const docRef = await addDoc(collection(db, collectionName), {
    ...data,
    createdAt: new Date()
  });
  return docRef.id;
};

export const getItem = async (collectionName, id) => {
  const snap = await getDoc(doc(db, collectionName, id));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
};

export const listItems = async (collectionName, filters=[], max=50) => {
  let q = query(collection(db, collectionName), limit(max));

  filters.forEach(f => {
    q = query(q, where(f.field, f.op, f.value));
  });

  const data = await getDocs(q);
  return data.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const updateItem = async (collectionName, id, data) =>
  updateDoc(doc(db, collectionName, id), {
    ...data,
    updatedAt: new Date()
  });

export const deleteItem = (collectionName, id) =>
  deleteDoc(doc(db, collectionName, id));
