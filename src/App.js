import { useState } from "react";
import "./styles/App.scss";
import { Header } from "./components/Header";
import { Calendar } from "./components/Calendar";
import { Write } from "./components/Write";

function App() {
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [colorStatus, setColorStatus] = useState({
    ref: ['rgb(255,0,0)', 'rgb(255,255,0)', 'rgb(0,255,0)', 'rgb(0,0,255)', 'rgb(255,0,255)'],
    c2023Jan1: 0,
    c2023Feb2: 1,
    c2023Mar2: 2,
    c2023Apr2: 3,
    c2023May2: 4
  });
  
  return (
    <div className="app">
      <Header 
        year={calendarYear}
        setYear={setCalendarYear} />
      { !!selectedDate && (<Write 
        date={selectedDate} 
        setDate={setSelectedDate}
        colors={colorStatus}
        setColor={setColorStatus}
        hide={() => {setSelectedDate(null)}} />)}
      <Calendar 
        year={calendarYear}
        setDate={setSelectedDate}
        colors={colorStatus} />
    </div>
  );
}

export default App;
