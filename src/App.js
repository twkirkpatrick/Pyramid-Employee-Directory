import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <Results />
    </div>
  );
}

export default App;
