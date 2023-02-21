import { useState, createRef } from "react";
import "./styles/App.scss";
import { Header } from "./components/Header";
import { Calendar } from "./components/Calendar";
import { Write } from "./components/Write";

function App() {
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState();
  const refWrite = createRef();
  return (
    <div className="app">
      <Header year = {calendarYear} setYear = {setCalendarYear} />
      <Write date = {selectedDate} setDate = {setSelectedDate} ref = {refWrite} />
      <Calendar year = {calendarYear} setDate = {setSelectedDate} write = {refWrite} />
    </div>
  );
}

export default App;
