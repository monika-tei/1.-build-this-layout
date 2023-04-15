import { useState } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main.1";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}
