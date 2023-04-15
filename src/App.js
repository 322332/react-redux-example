import React from "react";

import Main from "./components/Main";
import Header from "./components/Header";

import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";

import { Routes, Route } from "react-router-dom";

function NoMatch() {
  return "no match";
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Component1 />} />
        <Route path="comp2" element={<Component2 />} />
        <Route path="comp3" element={<Component3 />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
