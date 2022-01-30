
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./components/Home.jsx"
import SpecificChalka from './components/SpecificChalka';
import NewChalka from './components/NewChalka';
import NewComment from './components/NewComment';
import logo from "./components/imgs/logo.png"
import Info from './components/Info';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <div className='header' onClick={() => window.location = "/"}>
        <h1 ><img className='logoImg' src={logo} alt="" /> Chálky ze školní jídelny</h1>
      </div>
      <Router>
        <Routes>
          <Route path="/info" element={<Info />}></Route>
          <Route path="chalky/:id/new/comment" element={<NewComment />}></Route>
          <Route path="new/chalka" element={<NewChalka />}></Route>
          <Route path="chalky/:id" element={<SpecificChalka />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
