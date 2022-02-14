import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppStyletile from './AppStyletile';
import AppComponents from './AppComponents';
import AppCV from './AppCV';
import AppCaseEngine from './AppCaseEngine';
import AppCaseVersantus from './AppCaseVersantus';
import AppCaseICAEW2 from './AppCaseICAEW2';
import AppCaseMerchantCantos from './AppCaseMerchantCantos';
import AppCaseICAEW1 from './AppCaseICAEW1';
import AppCaseCashplus from './AppCaseCashplus';
import AppCaseHomeserveUSA from './AppCaseHomeserveUSA';
import AppCaseHomeserve from './AppCaseHomeserve';
import AppNetBux from './AppNetBux';
import AppApps from './AppApps';
import AppRaces from './AppRaces';
import AppThoughts from './AppThoughts';
import AppNetflixRaces from './AppNetflixRaces';
import AppTriathlons from './AppTriathlons';
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
              <Route path="/AppCaseEngine" element={<AppCaseEngine />} />
              <Route path="/AppCaseVersantus" element={<AppCaseVersantus />} />
              <Route path="/AppCaseICAEW2" element={<AppCaseICAEW2 />} />
              <Route path="/AppCaseMerchantCantos" element={<AppCaseMerchantCantos />} />
              <Route path="/AppCaseICAEW1" element={<AppCaseICAEW1 />} />
              <Route path="/AppCaseCashplus" element={<AppCaseCashplus />} />
              <Route path="/AppCaseHomeserveUSA" element={<AppCaseHomeserveUSA />} />
              <Route path="/AppCaseHomeserve" element={<AppCaseHomeserve />} />
              <Route path="/AppApps" element={<AppApps />} />
              <Route path="/AppNetBux" element={<AppNetBux />} />
              <Route path="/AppRaces" element={<AppRaces />} />
              <Route path="/AppThoughts" element={<AppThoughts />} />
              <Route path="/AppNetflixRaces" element={<AppNetflixRaces />} />
              <Route path="/AppTriathlons" element={<AppTriathlons />} />
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
