import Header from "./components/Header";
import Home from "./pages/Home";
import '../src/css/globals.css'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="app">
      <div className="circle"></div>
      <Header />
      <main className="app__main">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
