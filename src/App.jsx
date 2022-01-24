
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./components/Home.jsx"
import SpecificChalka from './components/SpecificChalka';
import NewChalka from './components/NewChalka';

function App() {
  return (
    <>
      <div className='header' onClick={()=>window.location = "/"}>
        <h1>🍛 Chálky ze školní jídelny</h1>
      </div>
      <Router>
        <Routes>
          <Route path="new/chalka" element={<NewChalka/>}></Route>
          <Route path="chalky/:id" element={<SpecificChalka/>}></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
