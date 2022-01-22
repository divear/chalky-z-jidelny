
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./components/Home.jsx"

function App() {
  return (
    <>
      <header>
        <h1>🍛 Chálky ze školní jídelny</h1>
        <title>Chálky ze školní jídelny</title>
      </header>
      <Router>
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
