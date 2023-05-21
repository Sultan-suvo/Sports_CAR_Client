import { useState } from "react";
import { useParams } from "react-router-dom";

const UpdateMyToy = () => {
  const { id } = useParams(); // Get the toy ID from the URL
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();

    const updateData = {
      price: parseFloat(price),
      quantity: parseInt(quantity),
      description: description,
    };

    fetch(`https://assignment-11-server-six-tawny.vercel.app/addToys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          alert(data.message);
          // Perform any necessary actions after successful update
        } else {
          alert("Failed to update toy");
        }
      })
      .catch((error) => {
        console.error("Error updating toy:", error);
      });
  };

  return (
    <div className="my-12 w-1/2 mx-auto">
      <h2 className="text-3xl mb-6 text-center">Update Toy</h2>
      <form onSubmit={handleUpdate}>
        <div className="form-field flex">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="input-field border rounded-md ms-2 w-full"
          />
        </div>

        <div className="form-field flex mt-4">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="input-field border rounded-md ms-2 w-full"
          />
        </div>

        <div className="form-field flex mt-4">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-field border rounded-md ms-2 w-full"
          ></textarea>
        </div>

        <div className="text-center mt-4">
          <input type="submit" value="Update Toy" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" />
        </div>
      </form>
    </div>

  );
};

export default UpdateMyToy;
