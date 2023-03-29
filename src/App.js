import "./styles/App.scss";
import { Header } from "./components/Header";
import { Calendar } from "./components/Calendar";
import { Write } from "./components/Write";
import { Menu } from "./components/Menu";
import { useCalendarContext } from "./contexts/CalendarContext";
import { useState } from "react";
import { useAuthContext } from "./contexts/AuthContext";
import { Auth } from "./components/Auth";

function App() {
  const { user } = useAuthContext();
  console.log("currUser", user);
  const {date} = useCalendarContext();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <div className="app">
      { !user ? <Auth />
        : <>
          { date && <Write /> }
          <Menu visible={isMenuVisible} hide={() => setIsMenuVisible(false)}/>
          <Header showMenu={setIsMenuVisible}/>
          <Calendar />
        </>
      }
    </div>
  );
}

export default App;
