import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitle from "../../hooks/useTitle";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sortOrder, setSortOrder] = useState("ascending");
  useTitle('myToys');

  const url = `https://assignment-11-server-six-tawny.vercel.app/addToys?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const sortedData = data.sort((a, b) => a.price - b.price);
        setMyToys(sortedData);
      })
      .catch(error => {
        console.error("Error fetching toys:", error);
      });
  }, [url]);

  const handleUpdate = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to update your toy',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle the update logic here
        // You can use `id` to identify the toy you want to update
        // Example: history.push(`/updateMyToy/${id}`);
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete your toy',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-11-server-six-tawny.vercel.app/addToys/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your toy has been deleted.', 'success');
              const remaining = myToys.filter(myToy => myToy._id !== id)
              setMyToys(remaining);
            }
          })
          .catch(error => {
            console.error("Error deleting toy:", error);
          });
      }
    });
  };

  const handleSort = () => {
    const sortedToys = [...myToys];
    if (sortOrder === "ascending") {
      sortedToys.sort((a, b) => a.price - b.price);
      setSortOrder("descending");
    } else {
      sortedToys.sort((a, b) => b.price - a.price);
      setSortOrder("ascending");
    }
    setMyToys(sortedToys);
  };

  return (
    <div>
      <div className="my-12 mx-auto">
        <h2 className="text-2xl text-center font-bold mb-4">My Toys</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">SellerEmail</th>
                <th className="px-4 py-2">
                  Price
                  <button
                    onClick={handleSort}
                    className="text-blue-500 ml-2"
                  >
                    {sortOrder === "ascending" ? "▲" : "▼"}
                  </button>
                </th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {myToys.map((toy) => (
                <tr key={toy._id}>
                  <td className="border px-4 py-2">{toy.name}</td>
                  <td className="border px-4 py-2">{toy.sellerEmail}</td>
                  <td className="border px-4 py-2">{toy.price}</td>
                  <td className="border px-4 py-2">{toy.quantity}</td>
                  <td className="border px-4 py-2">{toy.description}</td>
                  <td className="border text-center px-4 py-2">
                    <Link to={`/updateMyToy/${toy._id}`}>
                      <button
                        onClick={() => handleUpdate(toy._id)}
                        className="mr-2 bg-blue-500 text-white px-2 py-1 rounded font-semibold hover:bg-blue-600"
                      >
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(toy._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded font-semibold hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
