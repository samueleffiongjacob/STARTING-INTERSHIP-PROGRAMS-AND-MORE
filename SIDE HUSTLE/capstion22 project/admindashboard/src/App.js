import "./scss/main.css";
import './index.css';
import Home from "./pages/Home"
import { HashRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Login/Signup";
import Signin from "./components/Login/Signin";
import Welcome from "./components/Welcome";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="/welcome" element={<Welcome />} />

          <Route element={<ProtectedRoutes />} >
            <Route path="/*" element={<Dashboard />} />
          </Route>

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;