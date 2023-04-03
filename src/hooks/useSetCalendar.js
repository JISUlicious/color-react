import { useEffect } from "react";
import { getItem, addItem } from "../functions/storage";
import { referenceColors } from "../params";
import { actionCreator } from "../contexts/CalendarContext";

export const useSetCalendar = (user, dispatch) => {
  useEffect(() => {
    if (user) {
      getItem(
        `users/${user.uid}/calendars`,
        {}
      )
      .then((res) => {
        if (res.empty === true && user) {
          const key = `users/${user.uid}/calendars`
          const newCalendar = {
            calendarName: 'calendar1',
            colors: referenceColors
          }
          addItem(key, newCalendar).then(docRef => {
            dispatch(actionCreator.setCalendar(newCalendar.calendarName, docRef.id));
            dispatch(actionCreator.setColors(newCalendar.colors));
          });
        } else {
          const doc = res.docs[0];
          const data = doc.data();
          dispatch(actionCreator.setCalendar(data.calendarName, doc.id));
          dispatch(actionCreator.setColors(data.colors));
        }
      })
      .catch(error => console.log(error));
    }
  }, [user]);
}