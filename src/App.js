import { useState, useEffect } from "react";
import "./styles/App.scss";
import { Header } from "./components/Header";
import { Calendar } from "./components/Calendar";
import { Write } from "./components/Write";

function App() {
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const savedCalendar = JSON.parse(localStorage.getItem('calendarRecords'));
  const [calendarRecords, setCalendarRecords] = useState(savedCalendar ? savedCalendar : {});

  useEffect(() => {
    localStorage.setItem('calendarRecords', JSON.stringify(calendarRecords))
  }, [calendarRecords]);
  
  return (
    <div className="app">
      { !!selectedDate && (<Write 
        date={selectedDate}
        records={calendarRecords}
        setRecords={setCalendarRecords}
        hide={() => {setSelectedDate(null)}} />)}
      <Header 
        year={calendarYear}
        setYear={setCalendarYear} />
      <Calendar 
        year={calendarYear}
        setDate={setSelectedDate}
        records={calendarRecords} />
    </div>
  );
}

export default App;
