import { createContext, useState } from "react";
import "./styles/App.scss";
import { Header } from "./components/Header";
import { Calendar } from "./components/Calendar";
import { Write } from "./components/Write";
import { Menu } from "./components/Menu";

export const RecordContext = createContext([null, null]);

function App() {
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [record, setRecord] = useState(null);
  
  return (
    <RecordContext.Provider value={[record, setRecord]}>
      <div className="app">
        { !!selectedDate && (<Write 
          date={selectedDate}
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
          setDate={setSelectedDate} />
      </div>
    </RecordContext.Provider>
  );
}

export default App;
