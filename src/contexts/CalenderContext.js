import { createContext, useContext, useEffect, useReducer } from "react";
import { getItem, setItem } from "../functions/storage";

const initialState = {
  year: new Date().getFullYear(),
  date: null,
  calendarRecord: null,
  showMenu: false
};

export const CalendarContext = createContext(null);

export const CalendarDispatcherContext = createContext(null);


export const CalendarApp = ({children}) => {
  const [state, dispatcher] = useReducer(
    calendarReducer,
    initialState
  );
  useEffect(() => {
    getItem(String(state.year), {}).then(res => {
      dispatcher({
        type: "setRecord",
        calendarRecord: res
      });
    }).catch(error => console.log(error));
  }, [state.year]);
  
  return (
    <CalendarContext.Provider value={state}>
      <CalendarDispatcherContext.Provider value={dispatcher}>
        {children}
      </CalendarDispatcherContext.Provider>
    </CalendarContext.Provider>
  )
};

const calendarReducer = (calendarState, action) => {
  switch (action.type) {
    case "setRecord": {
      return {...calendarState, calendarRecord: action.calendarRecord};
    }
    case "addRecord": {
      const yearKey = action.newRecord.year;
      const dateKey = action.newRecord.dateKey;
      const newValue = {...calendarState.calendarRecord, [dateKey]: action.newRecord.value}
      
      setItem(yearKey, newValue).catch(error => console.log(error));
      return {...calendarState, calendarRecord: newValue};
    }
    case "setDate": {
      return {...calendarState, date: action.date};
    }
    case "incYear": {
      const newYear = calendarState.year + 1;
      return {...calendarState, year: newYear};
    }
    case "decYear": {
      const newYear = calendarState.year - 1;
      return {...calendarState, year: newYear};
    }
    case "showMenu": {
      return {...calendarState, showMenu: true};
    }
    case "hideMenu": {
      return {...calendarState, showMenu: false};
    }
    default: {
      return console.log("Invalid Action Type:", action.type);
    }
  }
};

export const useCalendarContext = () => useContext(CalendarContext);
export const useCalendarDispatcherContext = () => useContext(CalendarDispatcherContext);

