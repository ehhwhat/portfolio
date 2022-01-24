import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppStyletile from './AppStyletile';
import AppComponents from './AppComponents';
import AppCV from './AppCV';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <ScrollToTop />
          <Header />
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/AppStyletile" element={<AppStyletile />} />
              <Route path="/AppComponents" element={<AppComponents />} />
              <Route path="/AppCV" element={<AppCV />} />
          </Routes>
          <Footer />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
