import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CalendarApp } from "./contexts/CalendarContext";
import { AuthProvider } from "./contexts/AuthContext";
import { StorageProvider } from "./contexts/StorageContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <CalendarApp>
      <StorageProvider>
        <App />
      </StorageProvider>
    </CalendarApp>
  </AuthProvider>
);

