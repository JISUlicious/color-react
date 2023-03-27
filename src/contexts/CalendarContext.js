import { createContext, useContext, useEffect, useReducer } from "react";
import { getItem, setItem } from "../functions/storage";
import { dateToKey } from "../functions/dateToKey";

const initialState = {
  year: new Date().getFullYear(),
  date: null,
  records: null
};

export const CalendarContext = createContext(null);

export const CalendarDispatchContext = createContext(null);

export const useCalendarContext = () => useContext(CalendarContext);
export const useCalendarDispatchContext = () => useContext(CalendarDispatchContext);

export const actionCreator = {
  setRecord: (records) => ({type: actionTypes.setRecord, records}),
  addRecord: (date, newRecord) => ({type: actionTypes.addRecord, date, newRecord}),
  setDate: (date) => ({type: actionTypes.setDate, date}),
  setYear: (value) => ({type: actionTypes.setYear, value})
};

export const actionTypes = {
  setRecord: "setRecord",
  addRecord: "addRecord",
  setDate: "setDate",
  setYear: "setYear"
};

const calendarReducer = (calendarState, action) => {
  switch (action.type) {
    case actionTypes.setRecord: {
      return {
        ...calendarState,
        records: action.records
      };
    }
    case actionTypes.addRecord: {
      const yearKey = String(action.date.year);
      const dateKey = dateToKey(action.date);
      const newValue = {
        ...calendarState.records,
        [dateKey]: action.newRecord
      }
      setItem(yearKey, newValue).catch(error => console.log(error));
      return {...calendarState, records: newValue};
    }
    case actionTypes.setDate: {
      return {...calendarState, date: action.date};
    }
    case actionTypes.setYear: {
      const newYear = calendarState.year + action.value;
      return {...calendarState, year: newYear};
    }
    default: {
      return console.log("Invalid Action Type:", action.type);
    }
  }
};

export const CalendarApp = ({children}) => {
  const [state, dispatch] = useReducer(
    calendarReducer,
    initialState
  );
  useEffect(() => {
    getItem(String(state.year), {})
      .then(res => {
        dispatch(actionCreator.setRecord(res));
      })
      .catch(error => console.log(error));
  }, [state.year]);

  return (
    <CalendarContext.Provider value={state}>
      <CalendarDispatchContext.Provider value={dispatch}>
        {children}
      </CalendarDispatchContext.Provider>
    </CalendarContext.Provider>
  )
};
