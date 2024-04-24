import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

export default () => {
  const [loading, setLoading] = useState(false);
  const [guruhlar, setGuruhlar] = useState([]);

  async function getGuruhlar() {
    setLoading(true);
    const col = collection(db, "Patok");
    const snapShot = await getDocs(col);
    setGuruhlar(snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  }
  useEffect(() => {
    getGuruhlar();
  }, []);
  return {
    loading,
    guruhlar,
  };
};
