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
    <div className="my-12 mx-auto">
      <h2 className="text-3xl">Update Toy</h2>
      <form onSubmit={handleUpdate}>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="input-field border rounded-md"
        />

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="input-field"
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input-field"
        ></textarea>

       <input type="submit" value="Update Toy" />
      </form>
    </div>
  );
};

export default UpdateMyToy;
