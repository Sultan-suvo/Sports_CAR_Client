import { Link } from "react-router-dom";


const ShopByCategoryCard = ({ picture, name, price, rating, details }) => {

    const handleClick = () => {
        // Save data to localStorage
        localStorage.setItem("productDetails", JSON.stringify({ name, price, rating, picture, details }));

        // Navigate to the desired component when the button is clicked
        history.push("/details");
    };

    return (
        <div className="toy space-y-2">
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