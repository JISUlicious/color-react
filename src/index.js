import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CalendarApp } from "./contexts/CalendarContext";
import { AuthProvider } from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <CalendarApp>
        <App />
    </CalendarApp>
  </AuthProvider>
);

