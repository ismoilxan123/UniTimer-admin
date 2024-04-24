import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

export default () => {
  const [uqituvchiLoading, setUqituvchiLoading] = useState(false);
  const [uqituvchi, setUqituvchi] = useState([]);

  async function getUqituvchi() {
    setUqituvchiLoading(true);
    const col = collection(db, "Uqituvchi");
    const snapShot = await getDocs(col);
    setUqituvchi(snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setUqituvchiLoading(false);
  }
  useEffect(() => {
    getUqituvchi();
  }, []);
  return {
    uqituvchiLoading,
    uqituvchi,
  };
};
