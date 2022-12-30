import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/my-img.jpg";

export default function Header() {
    
    return (
        <>
            <div className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow">
                <Link className="navbar-brand ms-auto me-auto ps-5" to="/website">
                    <img
                        src={logo}
                        className="img-fluid my-auto rounded-circle me-2"
                        alt="..."
                        style={{ width: "30px" }}
                    />
                    Saurav Kumar
                </Link>
                <div
                    className="btn navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </div>
                <div
                    className="collapse navbar-collapse justify-content-lg-end ms-sm-2 me-lg-5"
                    id="navbarNavDropdown"
                >
                    <ul className="navbar-nav align-items-center">
                        <li activeClassName="menu_active" className="nav-item">
                            <NavLink
                                activeClassName="menu_active"
                                exact
                                className="nav-link active"
                                aria-current="page"
                                to="/website"
                            >
                                {" "}
                                <i
                                    className="fas fa-home pe-1"
                                    style={{ color: "#845ef7" }}
                                ></i>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item me-2">
                            <NavLink
                                activeClassName="menu_active"
                                className="nav-link"
                                to="/website/about"
                            >
                                <i
                                    className="fas fa-project-diagram pe-1"
                                    style={{ color: "#845ef7" }}
                                ></i>
                                About Me
                            </NavLink>
                        </li>
                        <li className="nav-item me-2">
                            <NavLink
                                activeClassName="menu_active"
                                className="nav-link"
                                to="/website/projects"
                            >
                                <i
                                    className="fas fa-project-diagram pe-1"
                                    style={{ color: "#845ef7" }}
                                ></i>
                                Projects
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
