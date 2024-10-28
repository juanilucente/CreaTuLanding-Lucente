import React from 'react';

const CartWidget = ({ count }) => {
    return (
        <div>
            <h2>🛒</h2>
            <span>{count}</span> {}
        </div>
    );
};

export default CartWidget;
