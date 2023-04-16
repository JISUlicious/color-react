import { createContext, useContext, useReducer } from "react";
import { useAuthContext } from "./AuthContext";
import { useSetCalendar } from "../hooks/useSetCalendar";
import { useOnSnapshotChange } from "../hooks/useOnSnapshotChange";

const initialState = {
  calendar: null,
  colors: null,
  year: new Date().getFullYear(),
  records: null,
  selectedRecord: null,
  isLoading: true,
};

export const CalendarContext = createContext(null);

export const CalendarDispatchContext = createContext(null);

export const useCalendarContext = () => useContext(CalendarContext);
export const useCalendarDispatchContext = () => useContext(CalendarDispatchContext);

export const actionCreator = {
  setCalendar: (calendar) => (
    {
      type: actionTypes.setCalendar,
      calendar
    }),
  setColors: (colors) => ({type: actionTypes.setColors, colors}),
  setRecords: (records) => (
    {
      type: actionTypes.setRecords,
      records
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
        calendar: action.calendar,
        isLoading: false
      };
    }
    case actionTypes.setColors: {
      return {...calendarState, colors: action.colors};
    }
    case actionTypes.setRecords: {
      return {
        ...calendarState,
        records: {
          ...calendarState.records,
          ...action.records
        }
      };
    }
    case actionTypes.setSelectedRecord: {
      return {
        ...calendarState,
        selectedRecord: action.selectedRecord
      };
    }
    case actionTypes.setYear: {
      const newYear = calendarState.year + action.value;
      return {...calendarState, year: newYear};
    }
    default: {
      throw new Error("Invalid Action Type:" + action.type);
    }
  }
};

export const CalendarProvider = ({children}) => {
  const [state, dispatch] = useReducer(
    calendarReducer,
    initialState
  );
  
  const { user } = useAuthContext();
  
  useSetCalendar(user.uid);
  useOnSnapshotChange(user.uid, state.calendar?.id || null, state.year);
  
  return (
    <CalendarContext.Provider value={state}>
      <CalendarDispatchContext.Provider value={dispatch}>
        {children}
      </CalendarDispatchContext.Provider>
    </CalendarContext.Provider>
  );
};
