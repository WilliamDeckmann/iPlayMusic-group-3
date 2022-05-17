import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import Background from './context/Background';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Background>
    </ThemeProvider>
  </React.StrictMode>
);
