import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/nestle.png";

import classes from "./NavigationBar.module.css";

const NavigationBar = () => {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <Link className={classes['img-link']} to="/dashboard-summary">
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
                    <li className={`nav-item ${location.pathname === "/dashboard-summary" && "active"}`}>
                        <Link className="nav-link" to="/dashboard-summary">Dashboard Summary</Link>
                    </li>
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
                    <li className={`nav-item ${location.pathname === "/forecast-revenue" && "active"}`}>
                        <Link className="nav-link" to="/forecast-revenue">Forecast Revenue</Link>
                    </li>
                    <li className={`nav-item ${location.pathname === "/about-us" && "active"}`}>
                        <Link className="nav-link" to="/about-us">About Us</Link>
                    </li>
                    <li className={`nav-item ${location.pathname === "/upload-excel" && "active"}`}>
                        <Link className="nav-link" to="/upload-excel">Add Details</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavigationBar;