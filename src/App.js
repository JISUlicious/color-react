import "./styles/App.scss";
import { Header } from "./components/Header";
import { Calendar } from "./components/Calendar";
import { Write } from "./components/Write";
import { Menu } from "./components/Menu";
import { useCalendarContext } from "./contexts/CalenderContext";

function App() {
  
  const calendarState = useCalendarContext();

  return (
    <div className="app">
      { calendarState.date && <Write /> }
      <Menu />
      <Header />
      <Calendar />
    </div>
  );
}

export default App;
