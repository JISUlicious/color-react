import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../functions/firebaseInit";
import { actionCreator } from "../contexts/CalendarContext";
import { dateToKey } from "../functions/dateToKey";

export const useOnSnapshotChange = (user, calendar, year, dispatch) => {
  useEffect(() => {
    if (user && calendar) {
      const key = `users/${user.uid}/calendars/${calendar.id}/records`;
      const q = query(
        collection(db, key),
        where("year", "==", year)
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const records = {};
        snapshot.docChanges().forEach((change) => {
          const doc = change.doc;
          const record = doc.data();
          const dateKey = dateToKey(record);
          records[dateKey] = doc;
        });
        dispatch(actionCreator.setRecords(records));
      }, (error) => console.log(error));
      return () => unsubscribe();
    }
    }, [user, calendar]
  );
};