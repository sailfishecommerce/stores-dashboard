/* eslint-disable react-hooks/exhaustive-deps */
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { useAtom } from "jotai";
import { useEffect } from "react";

import { airwallexAdminPaymentAtom } from "@/utils/atomConfig";
import firebaseConfig from "@/utils/firebaseConfig";

export default function useAirwallexAdmin() {
  const [airwallexPayments, setAirwallexPayments] = useAtom(
    airwallexAdminPaymentAtom
  );

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    const dbRefId = "payment/airwallex";
    const dbRef = ref(db, dbRefId);
    onValue(dbRef, (snapshot) => {
      const snapshopData = snapshot.val();
      if (snapshopData) {
        const snapshotDataArray = Object.values(snapshopData);
        const snapshotArray: any = [];
        snapshotDataArray.map((snapshotData: any) =>
          snapshotArray.push(JSON.parse(snapshotData))
        );
        setAirwallexPayments(snapshotArray);
      }
    });
  }, []);

  return { airwallexPayments };
}
