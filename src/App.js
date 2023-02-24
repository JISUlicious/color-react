import { useState } from "react";
import "./styles/App.scss";
import { Header } from "./components/Header";
import { Calendar } from "./components/Calendar";
import { Write } from "./components/Write";

function App() {
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  
  return (
    <div className="app">
      <Header year={calendarYear} setYear={setCalendarYear} />
      { !!selectedDate && <Write date={selectedDate} setDate={setSelectedDate} hide={() => {setSelectedDate(null)}}/>}
      <Calendar year={calendarYear} setDate={setSelectedDate} />
    </div>
  );
}

export default App;
