import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login/Login"
import Register from "./Pages/Auth/Register/Register"
import Treatment from './Pages/Treatment/Treatment'
import BeautyBar from './Pages/BeautyBar/BeautyBar'

function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Auth */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        {/* BeautyBar */}
        <Route path="/beautybars/:id" element={<BeautyBar />} />
        {/* Treatment */}
        <Route path="/treatments/:id" element={<Treatment />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
