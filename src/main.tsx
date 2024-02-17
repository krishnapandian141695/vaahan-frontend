import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import Dashboard from "./components/dashboard";
import Login from "./components/login/Login";
import CertificateList from "./components/list/CertificateList";
import { Provider } from "react-redux";
import NewEntry from "./components/newentry/NewEntry";
import QRCodeScanner from "./components/list/QRCodeScanner";
import Register from "./components/login/Register";
import { store } from "./store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes> 
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Qrcode" element={<QRCodeScanner />} />
          <Route path="/new-entry" element={<NewEntry />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/certificate-list" element={<CertificateList />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
