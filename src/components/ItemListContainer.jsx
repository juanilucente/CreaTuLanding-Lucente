import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ addToCart }) => {
  const { categoryId } = useParams(); 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      
      const allProducts = [
        { id: 1, name: "Le Sel d'issey", description: "Issey Miyake", price: 220, category: "perfume", image: product1 },
        { id: 2, name: "Fucking Fabulous", description: "Tom Ford", price: 350, category: "perfume", image: product2 },
        { id: 3, name: "212 VIP Black", description: "Carolina Herrera", price: 180, category: "cologne", image: product3 },
      ];

      
      const filteredProducts = categoryId
        ? allProducts.filter(product => product.category === categoryId)
        : allProducts;

      setProducts(filteredProducts);
      setLoading(false);
    };

    fetchProducts();
  }, [categoryId]); 

  if (loading) return <ClipLoader size={50} color="#212529" />;

  return (
    <div className="item-list-container">
      <h2>{categoryId ? `${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} Products` : "Catálogo"}</h2>
      <ItemList products={products} addToCart={addToCart} />
    </div>
  );
};

export default ItemListContainer;

