import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/nestle.png";

import classes from "./NavigationBar.module.css";

const NavigationBar = () => {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <Link className={classes['img-link']} to="/">
                <img className={classes.logo} src={logo} alt="Nestle.png" />
            </Link>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarNavDropdown" 
                aria-controls="navbarNavDropdown" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    <li className={`nav-item ${location.pathname === "/overview" && "active"}`}>
                        <Link className="nav-link" to="/overview">Overview</Link>
                    </li>
                   {/*  <li className={`nav-item ${location.pathname === "/nestle" && "active"}`}>
                        <Link className="nav-link" to="/nestle">Nestle</Link>
                    </li> */}
                    <li className={`nav-item dropdown ${location.pathname.includes("/financial") && "active"}`}>
                        <Link 
                            className="nav-link dropdown-toggle" 
                            to="/financial" 
                            id="navbarDropdownMenuLink" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false"
                        >
                            Financial Tracker
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="/financial/ADI">ADI</Link>
                            <Link className="dropdown-item" to="/financial/MSE">MSE</Link>
                            <Link className="dropdown-item" to="/financial/CFS">CFS</Link>
                        </div>
                    </li>
                    {/* <li className={`nav-item ${location.pathname === "/demand-tracker" && "active"}`}>
                        <Link className="nav-link" to="/demand-tracker">Demand Management</Link>
                    </li>
                    <li className={`nav-item ${location.pathname === "/ras-report" && "active"}`}>
                        <Link className="nav-link" to="/ras-report">Abouters</Link>
                    </li> */}
                    <li className={`nav-item ${location.pathname === "/about" && "active"}`}>
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavigationBar;