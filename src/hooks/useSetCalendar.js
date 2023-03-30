import { useEffect } from "react";
import { getItem, setItem } from "../functions/storage";
import { referenceColors } from "../params";
import { actionCreator } from "../contexts/CalendarContext";

export const useSetCalendar = (user, dispatch) => {
  useEffect(() => {
    if (user) {
      getItem(
        `calendars/${user}`,
        {}
      )
        .then((res) => {
          if (res === undefined && user) {
            // initialize calendar
            setItem(`calendars/${user}`, { calendar1: referenceColors })
            dispatch(actionCreator.setCalendar('calendar1'));
            dispatch(actionCreator.setColors(referenceColors))
          } else {
            const calendarName = Object.keys(res)[0];
            dispatch(actionCreator.setCalendar(calendarName));
            dispatch(actionCreator.setColors(res[calendarName]));
          }
        })
        .catch(error => console.log(error));
    }
  }, [user]);
}