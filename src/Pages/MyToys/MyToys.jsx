import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext)
  const [myToys, setMyToys] = useState([])
  useTitle('myToys')
  console.log(myToys);

  const url = `http://localhost:5000/addToys?sellerEmail=${user.email}`
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setMyToys(data))
  }, [url])

  
  const handleDelete = id => {
    const proceed = confirm('Are You sure want to delete tour toy')
    if (proceed) {
      fetch(`http://localhost:5000/addToys/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
    }
  }

  return (
    <div>
      <div className=" my-12 mx-auto">
        <h2 className="text-2xl text-center font-bold mb-4">My Toys</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">SellerEmail</th>
                <th className="px-4 py-2">Price</th>
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
                    <button className="mr-2 bg-blue-500 text-white px-2 py-1 rounded font-semibold hover:bg-blue-600">
                      Update
                    </button>
                    <button onClick={() => handleDelete(toy._id)} className="bg-red-500 text-white px-2 py-1 rounded font-semibold hover:bg-red-600">
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