import { useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { Calendar } from "./Calendar";

function App() {
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  
  return (
    <div className="App">
      <Header year={calendarYear} setYear={setCalendarYear}/>
      <Calendar />
    </div>
  );
}

export default App;
