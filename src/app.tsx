import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
// import EmailSettings from "./pages/email-configuration/email-configuration";

import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";
import Settings from "./pages/settings/settings";
import SettingsIndex from "./components/settings-dropdown/setting-index";
import { AuthProvider } from "./context/auth-context";
import Login from "./pages/login/login";
import AuthRequired from "./components/auth-required/auth-required";

const HomePage = () => {
  return (
    <div className="App">
      <Link to="/settings">Go to settings</Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AuthRequired />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/organizations/:id/settings"
            element={<SettingsIndex />}
          />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};
const root = createRoot(document.body);
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
