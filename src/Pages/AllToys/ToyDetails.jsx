import useTitle from "../../hooks/useTitle";

const ToyDetails = () => {
    useTitle('toyDetails')
    const selectedToy = JSON.parse(localStorage.getItem("selectedToy"));


    return (
        <div>
            <div className="card my-12 w-3/4 md:w-1/2 mx-auto bg-base-100 shadow-xl">
                <div className="md:flex md:p-3 justify-between">
                    <figure><img className="h-36 md:h-56" src={selectedToy.pictureUrl} alt="Shoes" /></figure>
                    <div className="card-body text-md">
                        <h2 className="card-title text-2xl">Toy name :{selectedToy.name}</h2>
                        <p>SellerName : <span className="text-orange-600">{selectedToy.sellerName}</span></p>
                        <p>SellerEmail :<span className="text-orange-600">{selectedToy.sellerEmail}</span></p>
                        <p>Price : <span className="text-orange-600">{selectedToy.price}</span></p>
                        <p>Rating : <span className="text-orange-600">{selectedToy.rating}</span></p>
                        <p>Quantity : <span className="text-orange-600">{selectedToy.quantity}</span></p>
                        <p>Description : <span className="text-orange-600">{selectedToy.description}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;
