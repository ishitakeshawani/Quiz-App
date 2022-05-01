import "./App.css";
import { HomePage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
