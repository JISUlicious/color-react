import { useState } from "react";
import "./styles/App.scss";
import { Header } from "./components/Header";
import { Calendar } from "./components/Calendar";
import { Write } from "./components/Write";
import { Menu } from "./components/Menu";
import { usePersistState } from "./hooks/usePersistState";

function App() {
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [calendarRecords, setCalendarRecords] = usePersistState('calendarRecords', {});
  
  return (
    <div className="app">
      { !!selectedDate && (<Write 
        date={selectedDate}
        records={calendarRecords}
        setRecords={setCalendarRecords}
        hide={() => {setSelectedDate(null)}} />)}
      <Menu 
        isMenuVisible={isMenuVisible}
        hide={() => setIsMenuVisible(false)} />
      <Header
        showMenu={setIsMenuVisible}
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
