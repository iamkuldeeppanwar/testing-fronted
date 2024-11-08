import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Registor from "./pages/Register/Registor";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registor />} />
          <Route path="/protected" element={<Profile />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
