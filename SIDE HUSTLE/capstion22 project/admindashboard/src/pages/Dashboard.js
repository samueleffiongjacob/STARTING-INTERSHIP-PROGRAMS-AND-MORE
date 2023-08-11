import { Container } from "react-bootstrap";
import { Routes, Route, Navigate, useLocation, Link } from "react-router-dom";
import {AiOutlineTeam} from "react-icons/ai";
import {FaDatabase, FaHome, FaUsers} from "react-icons/fa"
import { useEffect, useState } from "react";
import Clients from "../components/Dashboard/Clients/clients";
import Products from "../components/Dashboard/Products/products";
import TeamMembers from "../components/Dashboard/TeamMembers/teamMembers";
import profile from "../assets/svg/sidebar/profile.svg";
import logout from "../assets/svg/sidebar/logout.svg";
import menu from "../assets/svg/menu.svg";
import './Dashboard.css'
import Homepage from "../components/Dashboard/Homepage/Homepage";



function Dashboard() {
    const location = useLocation().pathname;
    const [path, setPath] = useState("");

    const openNav = () => {
        document.getElementById("sidebar").style.left = "0px";
    }

    const closeNav = () => {
        document.getElementById("sidebar").style.left = "-300px";
    }

    const changePathAndClose = (path) => {
        if (window.innerWidth <= 992) {
            closeNav()
        }
        setPath(path);

    }



    useEffect(() => {
        setPath(location);

    }, [location])

    let userDetails = JSON.parse(sessionStorage.getItem("userDetails"))

    return (
        <div className="dashboard">
            <div className="dashboard_sidebar hide-scrollBar" id="sidebar">
                <img src={profile} alt="cancel" className="dashboard_sidebar-cancel" onClick={closeNav} />
                <h3> Welcome {userDetails.name} </h3>

                <div className="dashboard_sidebar-main"></div>



                 <Link className="link-decor" to="/Homepage">
                    <div
                        className={path.includes("Homepage") || path === "Homepage"
                            ? "dashboard_sidebar-items active"
                            : "dashboard_sidebar-items"}
                        onClick={() => changePathAndClose("Homepage")}
                    >
                        <FaHome className="team" />
                        <p> Dashboard</p>
                    </div>
                </Link>


                <Link className="link-decor" to="/clients">
                    <div
                        className={path.includes("clients") || path === "clients"
                            ? "dashboard_sidebar-items active"
                            : "dashboard_sidebar-items"}
                        onClick={() => changePathAndClose("clients")}
                    >
                        <FaUsers className="team" />
                        <p> Clients</p>
                    </div>
                </Link>
                <Link to="/products" className="link-decor">
                    <div
                        className={path.includes("products") || path === "products"
                            ? "dashboard_sidebar-items active"
                            : "dashboard_sidebar-items"}
                        onClick={() => changePathAndClose("products")}
                    >
                        <FaDatabase className="team" />
                        <p>Products</p>
                    </div>
                </Link>
                <Link className="link-decor" to="/teamMembers">
                    <div
                        className={path.includes("teamMembers") || path === "teamMembers"
                            ? "dashboard_sidebar-items active"
                            : "dashboard_sidebar-items"}
                        onClick={() => changePathAndClose("teamMembers")}
                    >
                        <AiOutlineTeam className="team" />
                        <p>Team Members</p>
                    </div>
                </Link>

                <hr />

                       <div className="dashboard_sidebar-items logout"  id="landpage" //onClick={logOut}
                >


                    <img src={logout} alt="icon" />
                    <p>  <Link to="/Home" style={{ color: "white" }} id='bol'>Go to Home</Link></p>
                </div>

                        

                <div className="dashboard_sidebar-items logout" //onClick={logOut}
                >


                    <img src={logout} alt="icon" />
                    <p>  <Link to="/Signin" style={{ color: "white" }} id='bol'>Logout</Link></p>
                </div>

            </div>
            <div className="dashboard_main">
                <Container>
                    <div className="dashboard_main-nav">
                        <img src={menu} alt="menu" className="dashboard_main-nav-menu"
                            onClick={() => openNav()} />
                        <h4
                            //onClick={goToBoard} 
                            style={{ cursor: "pointer" }}>
                            {
                                path.includes("Homepage") ? "Dashboard"
                                    : path.includes("clients") ? "Clients"
                                        : path.includes("products") ? "Products"
                                            : path.includes("teamMembers") ? "teamMembers"
                                                : path.includes("apis") ? "APIs"
                                                    : <p className="wel">Welcome to your dashboard! <span>Click the side bar links to access other features</span></p>
                            }

                        </h4>


                    </div>



                </Container>
                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="/Homepage" />} />
                        <Route path="/clients" element={<Clients />} />
                        <Route path="/products/*" element={<Products />} />
                        <Route path="/teamMembers/*" element={<TeamMembers />} />
                        
                        <Route path="/Homepage/*" element={<Homepage />} />


                    </Routes>
                </div>
            </div>

        </div>
    )
}

export default Dashboard;