import React , { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { Learn } from "./views/Learn/Learn";
import { DeckCreate } from "./views/DeckCreate/DeckCreate";
import { Cards } from "./views/Cards/Cards";
import { AddCard } from "./views/Cards/AddCard";
import { MoreOptions } from "./views/MoreOptions/MoreOptions";
import { Nav } from "./components/Nav";
import { DeckContextProvider } from "./contexts/DeckContext";
import { SearchContextProvider } from "./contexts/SearchContext";
import { Review } from "./views/Review/Review";

function App () {
    const [deck, setDeck] = useState<number|undefined>();
    return (
      <main className="w-[100vw] h-[100vh] bg flex flex-col justify-between">
          <DeckContextProvider>
              <SearchContextProvider>
                  <BrowserRouter>
                      <Routes>
                          <Route path="/" element={<Home setDeck={(value:number) => setDeck(value)} />} />
                          <Route path="/learn" element={<Learn />} />
                          <Route path="/review" element={<Review />} />
                          <Route path="/create" element={<DeckCreate setDeck={(id:number) => setDeck(id)} />} />
                          <Route path="/cards" element={<Cards />} />
                          <Route path="/addcard" element={<AddCard />} />
                          <Route path="/more" element={<MoreOptions />} />
                      </Routes>
                      <Nav />
                  </BrowserRouter>
              </SearchContextProvider>
          </DeckContextProvider>
      </main>
  )
}

export default App;