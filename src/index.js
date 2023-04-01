import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {CalendarApp} from "./contexts/CalendarContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CalendarApp>
    <App />
  </CalendarApp>
);

