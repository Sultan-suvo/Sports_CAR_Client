import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const allToys = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredToys, setFilteredToys] = useState(allToys);
  useTitle('allToys')

  const handleViewDetails = (toy) => {
    localStorage.setItem("selectedToy", JSON.stringify(toy));
  };

  const handleFilter = () => {
    const filteredData = allToys.filter(toy =>
      toy.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredToys(filteredData);
  };

  return (
    <div className="my-12 mx-auto">
      <h2 className="text-2xl text-center font-bold mb-4">All Toys</h2>
      <div className="mb-4">
        <input
          type="text"
          className="border border-gray-300 rounded py-2 px-4 w-4/3"
          placeholder="Search by Toy Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded ml-4"
          onClick={handleFilter}
        >
          Filter
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2">Seller Name</th>
              <th className="px-4 py-2">Toy Name</th>
              <th className="px-4 py-2">Sub-category</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">View Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredToys.map((toy) => (
              <tr key={toy._id}>
                <td className="border px-4 py-2">{toy.sellerEmail}</td>
                <td className="border px-4 py-2">{toy.name}</td>
                <td className="border px-4 py-2">{toy.subcategory}</td>
                <td className="border px-4 py-2">{toy.price}</td>
                <td className="border px-4 py-2">{toy.quantity}</td>
                <td className="border text-center px-4 py-2">
                  <Link
                    className="mr-2 bg-blue-500 text-white px-2 py-1 rounded font-semibold hover:bg-blue-600"
                    to="/toyDetails"
                    onClick={() => handleViewDetails(toy)}
                  >
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
