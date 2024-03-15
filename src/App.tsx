import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { Learn } from "./views/Learn/Learn";
import { Nav } from "./components/Nav";

import type {deck, search} from "./types/types";

export const DeckContext = createContext<deck[]>([]);
export const SearchContext = createContext<string>("");
export const SearchSetterContext = createContext(
    (value:string) => {}
)

function App () {
    const [search, setSearch] = useState<string>("");
    const [decks, setDecks] = useState<deck[]>([
        {
            id: 0,
            title: "Default Deck",
            cardsInDeck: 2,
            cards: [
                {
                    id: 0,
                    oneSide: "one side",
                    secondSide: "second side",
                    whenToSee: new Date(new Date().getTime() - (1000 * 60 * 60 * 24))
                }
            ]
        },
    ]);

    return (
      <main className="w-[100vw] h-[100vh] bg flex flex-col justify-between">
          <DeckContext.Provider value={decks}>
              <SearchContext.Provider value={search}>
                  <SearchSetterContext.Provider value={(value:string) => setSearch(value)}>
                      <BrowserRouter>
                          <Routes>
                              <Route path="/" element={<Home />} />
                              <Route path="/learn" element={<Learn />} />
                          </Routes>
                          <Nav />
                      </BrowserRouter>
                  </SearchSetterContext.Provider>
              </SearchContext.Provider>
          </DeckContext.Provider>
      </main>
  )
}

export default App;