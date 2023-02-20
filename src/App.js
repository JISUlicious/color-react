import { useState } from "react";
import "./styles/App.css";
import { Header } from "./components/Header";
import { Calendar } from "./components/Calendar";
import { Write } from "./components/Write";

function App() {
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState({});
  return (
    <div className="app">
      <Header year = {calendarYear} setYear = {setCalendarYear} />
      <Calendar year = {calendarYear} setDate = {setSelectedDate} />
      <Write date = {selectedDate} setDate = {setSelectedDate} />
    </div>
  );
}

export default App;
