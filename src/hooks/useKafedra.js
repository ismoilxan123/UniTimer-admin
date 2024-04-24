import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

export default () => {
  const [loading, setLoading] = useState(false);
  const [kafedra, setKafedra] = useState([]);

  async function getKafedra() {
    setLoading(true);
    const col = collection(db, "Kafedra");
    const snapShot = await getDocs(col);
    setKafedra(snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  }
  useEffect(() => {
    getKafedra();
  }, []);
  return {
    loading,
    kafedra,
  };
};
