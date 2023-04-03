import { useEffect } from "react";
import { getItem } from "../functions/storage";
import { actionCreator } from "../contexts/CalendarContext";
import { where } from "firebase/firestore";
import { dateToKey } from "../functions/dateToKey";

export const useSetRecords = (user, state, dispatch) => {
  useEffect(() => {
      if (user && state.calendar) {
        const filter = where("year", "==", state.year);
        getItem(
          `users/${user.uid}/calendars/${state.calendar.calendarId}/records`,
          {},
          filter
        )
          .then(res => {
            let records = {};
            let recordIds = {};
            if (res) {
              res.forEach(doc => {
                const record = doc.data();
                const dateKey = dateToKey(record);
                records[dateKey] = record;
                recordIds[dateKey] = doc.id;
              })
            }
            dispatch(actionCreator.setRecords(records, recordIds));
          })
          .catch(error => console.log(error));
      }
    },
    [user, state.year, state.calendar]
  );
};
