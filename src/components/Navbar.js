import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Ajoutez votre propre fichier CSS pour les styles personnalisés

const Navbar = () => {
  return (
    <header className="navbar-header">
      <div className="container-fluid p-3 bg-secondary text-white">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="mb-0">
            <NavLink to="/" className="text-decoration-none text-white brand">
              BOOKS
            </NavLink>
          </h4>
          <nav className="btn-group">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "btn btn-light active" : "btn btn-light"
              }
            >
              Accueil
            </NavLink>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive ? "btn btn-light active" : "btn btn-light"
              }
            >
              Rechercher
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
