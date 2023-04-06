import { createContext, useContext, useReducer } from "react";
import { useAuthContext } from "./AuthContext";
import { useSetRecords } from "../hooks/useSetRecords";
import { useSetCalendar } from "../hooks/useSetCalendar";
import { useOnSnapshotChange } from "../hooks/useOnSnapshotChange";
import { dateToKey } from "../functions/dateToKey";

const initialState = {
  calendar: null,
  colors: null,
  year: new Date().getFullYear(),
  records: null,
  recordIds: null,
  selectedRecord: null,
};

export const CalendarContext = createContext(null);

export const CalendarDispatchContext = createContext(null);

export const useCalendarContext = () => useContext(CalendarContext);
export const useCalendarDispatchContext = () => useContext(CalendarDispatchContext);

export const actionCreator = {
  setCalendar: (calendarName, calendarId) => (
    {
      type: actionTypes.setCalendar,
      calendarName,
      calendarId
    }),
  setColors: (colors) => ({type: actionTypes.setColors, colors}),
  setRecords: (records, recordIds) => (
    {
      type: actionTypes.setRecords,
      records,
      recordIds
    }),
  addRecord: (recordId, newRecord) => (
    {
      type: actionTypes.addRecord,
      recordId,
      newRecord,
    }),
  setYear: (value) => ({type: actionTypes.setYear, value}),
  setSelectedRecord: (selectedRecord) => (
    {
      type: actionTypes.setSelectedRecord,
      selectedRecord
    })
};

export const actionTypes = {
  setCalendar: "setCalendar",
  setColors: "setColors",
  setRecords: "setRecords",
  addRecord: "addRecord",
  setYear: "setYear",
  setSelectedRecord: "setSelectedRecord"
};

const calendarReducer = (calendarState, action) => {
  switch (action.type) {
    case actionTypes.setCalendar: {
      return {
        ...calendarState,
        calendar: {
          calendarName: action.calendarName,
          calendarId: action.calendarId
        }
      };
    }
    case actionTypes.setColors: {
      return {...calendarState, colors: action.colors};
    }
    case actionTypes.setRecords: {
      return {
        ...calendarState,
        records: action.records,
        recordIds: action.recordIds
      };
    }
    case actionTypes.setSelectedRecord: {
      return {
        ...calendarState,
        selectedRecord: action.selectedRecord
      };
    }
    case actionTypes.addRecord: {
      const dateKey = dateToKey(action.newRecord);
      return {
        ...calendarState,
        records: {
          ...calendarState.records,
          [dateKey]: action.newRecord
        },
        recordIds: {
          ...calendarState.recordIds,
          [dateKey]: action.recordId
        }
      };
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

export const CalendarProvider = ({children}) => {
  const [state, dispatch] = useReducer(
    calendarReducer,
    initialState
  );
  
  const { user } = useAuthContext();
  
  useSetCalendar(user, dispatch);
  useSetRecords(user, state, dispatch);
  useOnSnapshotChange(user, state, dispatch);
  
  return (
    <CalendarContext.Provider value={state}>
      <CalendarDispatchContext.Provider value={dispatch}>
        {children}
      </CalendarDispatchContext.Provider>
    </CalendarContext.Provider>
  );
};
