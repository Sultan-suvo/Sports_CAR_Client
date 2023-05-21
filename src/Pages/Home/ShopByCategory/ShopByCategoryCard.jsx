import { Link } from "react-router-dom";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const ShopByCategoryCard = ({ picture, name, price, rating, details }) => {
 const {user}= useContext(AuthContext)
 
  useEffect(() => {
    AOS.init();
  }, []);

  const handleClick = () => {
    if(!user){
      alert('You have to log in first to view detail')
    }   
    localStorage.setItem("productDetails", JSON.stringify({ name, price, rating, picture, details }));
    history.push("/details");
  };

  return (
    <div className="toy space-y-2" data-aos="flip-left" data-aos-delay="100">
      <img src={picture} alt={name} className="w-full mb-4 h-56 rounded-lg" />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-lg">Price: <span className="text-orange-700">{price}</span></p>
      <p className="text-lg">Rating: <span className="text-orange-700">{rating}</span>/5</p>
      <Link to='shopDetails'>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={handleClick}
        >
          {details}
        </button>
      </Link>
    </div>
  );
};

export default ShopByCategoryCard;
