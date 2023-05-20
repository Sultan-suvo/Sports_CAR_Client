

const ShopCategoryViewDetails = () => {
    const productDetails = JSON.parse(localStorage.getItem("productDetails"));

    return (
        <div className="my-12 w-3/4 mx-auto toy space-y-2">
            <img src={productDetails.picture} alt={name} className=" mb-4 h-56 rounded-lg" />
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-lg">Price: <span className="text-orange-700">{productDetails.price}</span></p>
            <p className="text-lg">Rating: <span className="text-orange-700">{productDetails.rating}</span>/5</p>          
                      
        </div>
    );
};

export default ShopCategoryViewDetails;