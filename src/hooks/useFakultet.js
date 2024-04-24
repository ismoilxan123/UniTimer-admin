import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

export default () => {
  const [loading, setLoading] = useState(false);
  const [fakultet, setFakultet] = useState([]);

  async function getFakultet() {
    setLoading(true);
    const col = collection(db, "Fakultet");
    const snapShot = await getDocs(col);
    setFakultet(snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // console.log(snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  }
  useEffect(() => {
    getFakultet();
  }, []);
  return {
    loading,
    fakultet,
  };
};
