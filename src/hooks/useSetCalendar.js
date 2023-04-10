import { useEffect } from "react";
import { getDoc } from "firebase/firestore";
import { getItem, addItem } from "../functions/storage";
import { referenceColors } from "../params";
import { actionCreator } from "../contexts/CalendarContext";

export const useSetCalendar = (user, dispatch) => {
  useEffect(() => {
    if (user) {
      getItem(`users/${user.uid}/calendars`, {})
      .then((res) => {
        if (res.empty === true && user) {
          const key = `users/${user.uid}/calendars`
          const newCalendar = {
            calendarName: 'calendar1',
            colors: referenceColors
          }
          addItem(key, newCalendar).then(docRef => {
            getDoc(docRef).then(doc => {
                dispatch(actionCreator.setCalendar(doc));
              }
            );
          });
        } else {
          const doc = res.docs[0];
          dispatch(actionCreator.setCalendar(doc));
        }
      })
      .catch(error => console.log(error));
    }
  }, [user]);
};