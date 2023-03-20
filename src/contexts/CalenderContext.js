import {createContext, useReducer} from "react";

export const CalendarContext = createContext(null);

export const CalendarContextDispatcher = createContext(null);

export const CalendarApp = (children) => {
  const [state, dispatcher] = useReducer(calendarReducer, initialState);
  return (
    <CalendarContext.Provider value={state}>
      <CalendarContextDispatcher.Provider value={dispatcher}>
        {children}
      </CalendarContextDispatcher.Provider>
    </CalendarContext.Provider>
  )
};

const calendarReducer = (calendarState, action) => {
  switch (action.type) {
    case "addRecord":{
      return {...calendarState, record: action.record};
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

const initialState = {
  year: new Date().getFullYear(),
  date: null,
  record: null,
  showMenu: false
};
