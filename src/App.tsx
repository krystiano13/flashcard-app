import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { Learn } from "./views/Learn/Learn";
import { DeckCreate } from "./views/DeckCreate/DeckCreate";
import { Nav } from "./components/Nav";
import { DeckContextProvider } from "./contexts/DeckContext";
import { SearchContextProvider } from "./contexts/SearchContext";

function App () {
    return (
      <main className="w-[100vw] h-[100vh] bg flex flex-col justify-between">\
          <DeckContextProvider>
              <SearchContextProvider>
                  <BrowserRouter>
                      <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/learn" element={<Learn />} />
                          <Route path="/create" element={<DeckCreate />} />
                      </Routes>
                      <Nav />
                  </BrowserRouter>
              </SearchContextProvider>
          </DeckContextProvider>
      </main>
  )
}

export default App;