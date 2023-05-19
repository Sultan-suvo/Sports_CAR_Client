

const ShopByCategoryCard = ({ picture, name, price, rating, details }) => {
    return (
        <div className="toy space-y-2">
            <img src={picture} alt={name} className="w-full mb-4 h-56 rounded-lg" />
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-lg">Price: <span className="text-orange-700">{price}</span></p>
            <p className="text-lg">Rating: <span className="text-orange-700">{rating}</span>/5</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                {details}
            </button>
        </div>
    );
};

export default ShopByCategoryCard;
