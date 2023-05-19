import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  const allToys = useLoaderData();

  return (
    <div className=" my-12 mx-auto">
      <h2 className="text-2xl text-center font-bold mb-4">All Toys</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2">Seller Name</th>
              <th className="px-4 py-2">Toy name</th>
              <th className="px-4 py-2">Sub-category</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">View Details</th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toy) => (
              <tr key={toy.id}>
                <td className="border px-4 py-2">{toy.sellerEmail}</td>
                <td className="border px-4 py-2">{toy.name}</td>
                <td className="border px-4 py-2">{toy.subcategory}</td>
                <td className="border px-4 py-2">{toy.price}</td>
                <td className="border px-4 py-2">{toy.quantity}</td>
                <td className="border text-center px-4 py-2">
                  <Link className="mr-2 bg-blue-500 text-white px-2 py-1 rounded font-semibold hover:bg-blue-600">
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
