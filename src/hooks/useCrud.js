import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { message, notification } from "antd";

export default (collectionName) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    getUqituvchi();
  }, []);
  async function getUqituvchi() {
    setLoading(true);
    const col = collection(db, collectionName);
    const snapShot = await getDocs(col);
    setData(snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  }

  async function addUqituvchi(uqituvchi) {
    try {
      setLoading(true);
      const docRef = await addDoc(collection(db, collectionName), uqituvchi);
      setData([...data, { ...uqituvchi, id: docRef.id }]);
      setOpen(false);
      message.success("Qo'shildi!");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setLoading(false);
  }

  async function deleteUqituvchi(id) {
    try {
      setLoading(true);
      await deleteDoc(doc(db, collectionName, id));
      setData(data.filter((d) => d.id != id));
      message.success("O'chirildi!");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  async function updateUqituvchi(id, values) {
    try {
      setLoading(true);
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, values);
      setData(data.map((d) => (d.id == id ? { ...values, id } : d)));
      setOpen(false);
      message.success("Tahrirlandi!");
      setEdit(null);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  return {
    loading,
    data,
    addUqituvchi,
    deleteUqituvchi,
    open,
    setOpen,
    edit,
    setEdit,
    updateUqituvchi,
  };
};
