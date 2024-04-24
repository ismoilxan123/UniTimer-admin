import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

export default () => {
  const [fanLoading, setFanLoading] = useState(false);
  const [fan, setFan] = useState([]);

  async function getFan() {
    setFanLoading(true);
    const col = collection(db, "Fan");
    const snapShot = await getDocs(col);
    setFan(snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setFanLoading(false);
  }
  useEffect(() => {
    getFan();
  }, []);
  return {
    fanLoading,
    fan,
  };
};
