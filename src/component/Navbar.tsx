/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { SelectUser } from "./SelectUser";

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
          <a className="navbar-item">TATU System</a>
          <a className="navbar-item">Home</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link is-arrowless">Sistemas </a>
            <div className="navbar-dropdown border-top">
              <a className="navbar-item">Remédios Doguinho</a>
              <a className="navbar-item">Lista de Compras</a>
              <a className="navbar-item">Todo List</a>
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
