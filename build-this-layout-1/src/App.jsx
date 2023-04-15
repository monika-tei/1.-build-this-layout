import { useState } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

function Main() {
  return (
    <div className="center-grid">
      <section className="grid-left"></section>
      <section className="grid-right"></section>
    </div>
  );
}

function Footer() {
  return console.log("footer");
}
