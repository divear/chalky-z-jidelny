
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./components/Home.jsx"
import SpecificChalka from './components/SpecificChalka';

function App() {
  return (
    <>
      <div onClick={()=>window.location = "/"}>
        <h1>🍛 Chálky ze školní jídelny</h1>
        <title>Chálky ze školní jídelny</title>
      </div>
      <Router>
        <Routes>
          <Route path="chalky/:id" element={<SpecificChalka/>}></Route>
            <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
