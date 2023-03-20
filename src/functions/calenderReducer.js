
export const calenderReducer = (calendarState, action) => {
  switch (action.type) {
    case (calendarActions.addRecord): {
    
    }
    default : {
      return console.log("Invalid action type:", action.type);
    }
  }
};

export const calendarActions = {
  addRecord: "addRecord",
  setDate: "setDate",
  incYear: "incYear",
  decYear: "decYear"
};