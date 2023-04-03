import "./styles/App.scss";
import { useAuthContext } from "./contexts/AuthContext";
import { CalendarProvider } from "./contexts/CalendarContext";
import { Auth } from "./components/Auth";
import { CalendarApp } from "./components/CalendarApp";

function App() {
  const {user} = useAuthContext();
  
  return (
      <div className="app">
        { !user ? <Auth />
          : (<CalendarProvider>
            <CalendarApp />
          </CalendarProvider>)
        }
      </div>
  );
}

export default App;
