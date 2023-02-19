/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { SelectUser } from "../SelectUser/SelectUser";

export const Navbar = () => {
  const classActive = "is-active";
  const [toogleMenu, setToogleMenu] = useState(false);

  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item logo">
          <Link to={"/"}>TATU SYSTEM</Link>
        </div>
        <div
          role="button"
          className={`navbar-burger ${toogleMenu ? classActive : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarTatu"
          onClick={() => setToogleMenu(!toogleMenu)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>
      <div
        id="navbarTatu"
        className={`navbar-menu ${toogleMenu ? classActive : ""}`}
      >
        <div className="navbar-start">
          <div className="navbar-item">
            <Link to={"/"}>HOME</Link>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link is-arrowless">Sistemas </div>
            <div className="navbar-dropdown border-top">
              <div className="navbar-item">
                <Link to={"/vaccine"}>Remédios Doguinho</Link>
              </div>
              <div className="navbar-item">Lista de Compras</div>
              <div className="navbar-item">Todo List</div>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <SelectUser />
          </div>
        </div>
      </div>
    </nav>
  );
};
