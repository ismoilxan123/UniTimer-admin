import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

export default () => {
  const [loading, setLoading] = useState(false);
  const [guruh, setGuruh] = useState([]);

  async function getGuruh() {
    setLoading(true);
    const col = collection(db, "Guruh");
    const snapShot = await getDocs(col);
    setGuruh(snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  }
  useEffect(() => {
    getGuruh();
  }, []);
  return {
    loading,
    guruh,
  };
};
