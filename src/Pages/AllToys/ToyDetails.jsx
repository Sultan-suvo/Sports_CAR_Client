import useTitle from "../../hooks/useTitle";

const ToyDetails = () => {
    useTitle('toyDetails')
    const selectedToy = JSON.parse(localStorage.getItem("selectedToy"));


    return (
        <div>
            <div className="overflow-x-auto my-8">
                <table className="table-auto w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">PictureUrl</th>
                            <th className="px-4 py-2">Seller Name</th>
                            <th className="px-4 py-2">Seller email</th>
                            <th className="px-4 py-2">Toy name</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Rating</th>
                            <th className="px-4 py-2">Quantity</th>
                            <th className="px-4 py-2">Descriptoin</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">{selectedToy.pictureUrl}</td>
                            <td className="border px-4 py-2">{selectedToy.sellerName}</td>
                            <td className="border px-4 py-2">{selectedToy.sellerEmail}</td>
                            <td className="border px-4 py-2">{selectedToy.name}</td>
                            <td className="border px-4 py-2">{selectedToy.price}</td>
                            <td className="border px-4 py-2">{selectedToy.rating}</td>
                            <td className="border px-4 py-2">{selectedToy.quantity}</td>
                            <td className="border px-4 py-2">{selectedToy.description}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ToyDetails;
