import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Calendar } from "./components/Calendar";

function App() {
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  
  return (
    <div className="app">
      <Header year={calendarYear} setYear={setCalendarYear}/>
      <Calendar year={calendarYear}/>
    </div>
  );
}

export default App;
