import { createContext, useContext, useReducer } from "react";
import { setItem } from "../functions/storage";
import { useAuthContext } from "./AuthContext";
import { useSetRecords } from "../hooks/useSetRecords";
import { useSetCalendar } from "../hooks/useSetCalendar";

const initialState = {
  calendarName: null,
  colors: null,
  year: new Date().getFullYear(),
  date: null,
  records: null
};

export const CalendarContext = createContext(null);

export const CalendarDispatchContext = createContext(null);

export const useCalendarContext = () => useContext(CalendarContext);
export const useCalendarDispatchContext = () => useContext(CalendarDispatchContext);

export const actionCreator = {
  setCalendar: (calendarName) => ({type: actionTypes.setCalendar, calendarName}),
  setColors: (colors) => ({type: actionTypes.setColors, colors}),
  setRecord: (records) => ({type: actionTypes.setRecord, records}),
  addRecord: (user, date, calendarName, newRecord) => (
    {
      type: actionTypes.addRecord,
      user,
      date,
      calendarName,
      newRecord,
    }),
  setDate: (date) => ({type: actionTypes.setDate, date}),
  setYear: (value) => ({type: actionTypes.setYear, value})
};

export const actionTypes = {
  setCalendar: "setCalendar",
  setColors: "setColors",
  setRecord: "setRecord",
  addRecord: "addRecord",
  setDate: "setDate",
  setYear: "setYear"
};

const calendarReducer = (calendarState, action) => {
  switch (action.type) {
    case actionTypes.setCalendar: {
      return {
        ...calendarState,
        calendarName: action.calendarName
      };
    }
    case actionTypes.setColors: {
      return {...calendarState, colors: action.colors};
    }
    case actionTypes.setRecord: {
      return {
        ...calendarState,
        records: action.records
      };
    }
    case actionTypes.addRecord: {
      const key = `calendars/${action.user}/${action.calendarName}/${action.date.year}`;
      setItem(key, action.newRecord).catch(error => console.log(error));
      return {
        ...calendarState,
        records: {
          ...calendarState.records,
          ...action.newRecord
        }
      };
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
  
  const { user } = useAuthContext();
  
  useSetCalendar(user, dispatch);
  useSetRecords(user, state, dispatch);
  
  return (
    <CalendarContext.Provider value={state}>
      <CalendarDispatchContext.Provider value={dispatch}>
        {children}
      </CalendarDispatchContext.Provider>
    </CalendarContext.Provider>
  );
};
