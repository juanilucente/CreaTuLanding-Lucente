import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ cartItems }) => {
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <h1>Lucente Parfums</h1>
      <ul>
        <li>
          <Link to="/">Catálogo</Link>
        </li>
        <li>
          <Link to="/cart">Carrito ({totalItems} items)</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
