import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { Learn } from "./views/Learn/Learn";
import { Nav } from "./components/Nav";

function App () {
  return (
      <main className="w-[100vw] h-[100vh] bg flex flex-col justify-between">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/learn" element={<Learn />} />
            </Routes>
            <Nav />
        </BrowserRouter>
      </main>
  )
}

export default App;