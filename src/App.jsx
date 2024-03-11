import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <h1 className="text-center">Flashcard App</h1>
            <Link to='/about'>About</Link>
          </div>
        } />
        <Route path="/about" element={
          <div>
            <h1 className="text-center">About</h1>
            <Link to='/'>Home</Link>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;