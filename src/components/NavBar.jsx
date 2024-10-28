import React from 'react';
import CartWidget from './CartWidget';

const NavBar = ({ cartCount }) => {
    return (
        <nav>
            <h1>Mi Tienda</h1>
            <CartWidget count={cartCount} />
        </nav>
    );
};

export default NavBar;

