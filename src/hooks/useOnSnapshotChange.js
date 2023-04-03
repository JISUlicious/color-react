import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../functions/firebaseInit";
import { actionCreator } from "../contexts/CalendarContext";

export const useOnSnapshotChange = (user, state, dispatch) => {
  useEffect(() => {
    if (user && state.calendar) {
      const key = `users/${user.uid}/calendars/${state.calendar.calendarId}/records`;
      const q = query(
        collection(db, key),
        where("year", "==", state.year)
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          const docData = change.doc.data();
          dispatch(actionCreator.addRecord(change.doc.id, docData));
        });
      }, (error) => console.log(error));
      return () => unsubscribe();
    }
    },
    [user, state.calendar]
  );
};