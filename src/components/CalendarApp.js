import { Write } from "./Write";
import { Menu } from "./Menu";
import { Header } from "./Header";
import { Calendar } from "./Calendar";
import { useCalendarContext } from "../contexts/CalendarContext";
import { useState } from "react";


export const CalendarApp = () => {
  const {date} = useCalendarContext();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return <>
    { date && <Write /> }
    <Menu visible={isMenuVisible} hide={() => setIsMenuVisible(false)}/>
    <Header showMenu={setIsMenuVisible}/>
    <Calendar />
  </>
};