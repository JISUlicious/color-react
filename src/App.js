import "./styles/App.scss";
import "./styles/Fonts.scss";
import { useAuthContext } from "./contexts/AuthContext";
import { CalendarProvider } from "./contexts/CalendarContext";
import { Auth } from "./components/Auth";
import { CalendarApp } from "./components/CalendarApp";

function App() {
  const {initialized, user} = useAuthContext();
  return (
      <div className="app">
        { !initialized ? null
          : !user ? <Auth />
            : (<CalendarProvider>
              <CalendarApp />
            </CalendarProvider>)
        }
      </div>
  );
}

export default App;
