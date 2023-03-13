import { useState, useRef } from "react";
import "./styles/App.scss";
import { Header } from "./components/Header";
import { Calendar } from "./components/Calendar";
import { Write } from "./components/Write";
import { Menu } from "./components/Menu";

function App() {
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const recordRef = useRef([null,null]);
  return (
    <div className="app">
      { !!selectedDate && (<Write 
        date={selectedDate}
        hide={() => {setSelectedDate(null)}}
        recordRef={recordRef} />)}
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
        ref={recordRef} />
    </div>
  );
}

export default App;
