import React from "react";
import Header from "./private/components/static/header";
import Footer from "./private/components/static/footer";
import "./App.scss";

export const App = () => (
  <div className="Root">
    <Header />
    <h1>Hello World</h1>
    <Footer />
  </div>
);
