import { createContext, useContext, useEffect, useReducer } from "react";
import { getItem, setItem } from "../functions/storage";

const initialState = {
  year: new Date().getFullYear(),
  date: null,
  calendarRecord: null,
  showMenu: false
};

export const CalendarContext = createContext(null);

export const CalendarDispatchContext = createContext(null);

export const useCalendarContext = () => useContext(CalendarContext);
export const useCalendarDispatchContext = () => useContext(CalendarDispatchContext);

export const actionCreator = (type, data = null) => {
  return {
    type: type,
    data: data
  };
};

export const actionTypes = {
  setRecord: "setRecord",
  addRecord: "addRecord",
  setDate: "setDate",
  setYear: "setYear",
  showMenu: "showMenu",
  hideMenu: "hideMenu"
};

const calendarReducer = (calendarState, action) => {
  switch (action.type) {
    case actionTypes.setRecord: {
      return {
        ...calendarState,
        calendarRecord: action.data.calendarRecord};
    }
    case actionTypes.addRecord: {
      const yearKey = action.data.year;
      const dateKey = action.data.dateKey;
      const newValue = {
        ...calendarState.calendarRecord,
        [dateKey]: action.data.value
      }
      setItem(yearKey, newValue).catch(error => console.log(error));
      return {...calendarState, calendarRecord: newValue};
    }
    case actionTypes.setDate: {
      return {...calendarState, date: action.data.date};
    }
    case actionTypes.setYear: {
      const newYear = calendarState.year + action.data;
      return {...calendarState, year: newYear};
    }
    case actionTypes.showMenu: {
      return {...calendarState, showMenu: true};
    }
    case actionTypes.hideMenu: {
      return {...calendarState, showMenu: false};
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
        dispatch(actionCreator(
          actionTypes.setRecord,
          {calendarRecord: res}
        ));
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
