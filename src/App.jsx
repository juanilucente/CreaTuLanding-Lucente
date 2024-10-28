import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';



const App = () => {
    const [cartCount, setCartCount] = useState(0);

    
    const addToCart = () => {
        setCartCount(cartCount + 1);
    };

    return (
        <div>
            <NavBar cartCount={cartCount} />
            <ItemListContainer message="Bienvenido a nuestra tienda!" />
            <button onClick={addToCart}>Agregar al carrito</button> {}
        </div>
    );
};

export default App;


