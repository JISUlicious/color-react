import { useEffect } from "react";
import { getItem } from "../functions/storage";
import { actionCreator } from "../contexts/CalendarContext";

export const useSetRecords = (user, state, dispatch) => {
  useEffect(() => {
    getItem(
      `calendars/${user}/${state.calendarName}/${state.year}`,
      {}
    )
      .then(res => {
        let records = {};
        if (res) {
          records = res;
        }
        dispatch(actionCreator.setRecord(records));
      })
      .catch(error => console.log(error));
  }, [user, state.year, state.calendarName]);
};