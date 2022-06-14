import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./header/index";
import { ListarLibros } from "./usuarios/components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<ListarLibros />} />
      </Routes>
    </div>
  );
};

export default App;
