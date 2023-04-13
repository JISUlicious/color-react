import { Write } from "./Write";
import { Menu } from "./Menu";
import { Header } from "./Header";
import { Calendar } from "./Calendar";
import { useCalendarContext } from "../contexts/CalendarContext";
import { useState } from "react";


export const CalendarApp = () => {
  const {selectedRecord, isLoading} = useCalendarContext();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return <>
    { isLoading ? null :
      <>
        { selectedRecord && <Write /> }
        <Menu visible={isMenuVisible} hide={() => setIsMenuVisible(false)}/>
        <Header showMenu={setIsMenuVisible}/>
        <Calendar />
      </>
    }
  </>
};