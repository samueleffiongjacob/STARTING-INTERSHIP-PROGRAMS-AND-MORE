/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Education from "./component/Education";
import Home from "./component/Home";
import Experience from "./component/Experience";
import Portfolio from "./component/Portfolio";
import Skills from "./component/Skills";
import About from "./component/About";
import Profile from "./component/Profile";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

function App() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <Router>
      <div className="container">
        <div className="nav-wrapper">
          <link to="/" className="brand-logo">
            cv
          </link>
          <Link to="/" data-target="side-nav" className="sidenav-trigger">
            <i className="material-icon">menu</i>
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <link to="/">
                <i className="fas fa-home"></i>Home
              </link>
            </li>

            <li>
              <link to="/education">
                <i className="fas fa-graduation-cap"></i>Education
              </link>
            </li>

            <li>
              <link to="/experience">
                <i className="fas fa-id-badge"></i>Experience
              </link>
            </li>

            <li>
              <link to="/portfolio">
                <i className="fas fa-address-card"></i>Portfolio
              </link>
            </li>

            <li>
              <link to="/skills">
                <i className="fas fa-copy"></i>Skills
              </link>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="education" element={<Education />} />
        <Route path="experience" element={<Experience />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="skills" element={<Skills />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

// {/* <Route path="/ profile" element={<Profile />}></Route> */}
