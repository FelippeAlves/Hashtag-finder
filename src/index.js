import React from "react";
import ReactDOM from "react-dom";
import About from "./pages/About/About";
import HomePage from "./pages/HomePage/HomePage";
import SearchListing from "./pages/SearchListing/SearchListing";
import Login from "./pages/Login/Login";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context";
import { ProtectedLayout } from "./components/ProtectedLayout";

ReactDOM.render(
  <AppProvider>
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/sobre" exact element={<About />} />
        <Route
          path="/search-listing"
          exact
          element={
            <ProtectedLayout>
              <SearchListing />
            </ProtectedLayout>
          }
        />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </Router>
  </AppProvider>,

  document.getElementById("root")
);
