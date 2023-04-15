import { useState } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

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
