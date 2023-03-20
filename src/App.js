import {useContext, useState} from "react";
import "./styles/App.scss";
import { Header } from "./components/Header";
import { Calendar } from "./components/Calendar";
import { Write } from "./components/Write";
import { Menu } from "./components/Menu";
import {CalendarApp, CalendarContext} from "./contexts/CalenderContext";

function App() {

  const calendarState = useContext(CalendarContext);
  console.log(calendarState);
  return (
    <CalendarApp>
      <div className="app">
        {/*{ !!calendarState.date && <Write />}*/}
        <Menu />
        <Header />
        <Calendar />
      </div>
    </CalendarApp>
  );
}

export default App;
