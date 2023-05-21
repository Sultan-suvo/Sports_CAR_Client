import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateMyToy = () => {

  const myToy = useLoaderData()
  const { _id, price, quantity, description } = myToy
  console.log(myToy);

  const handleUpdate = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const details = form.details.value;

    const updatedToy = { name, quantity, details }
    console.log(updatedToy);

    fetch(`https://assignment-11-server-six-tawny.vercel.app/addToys/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedToy)

    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Coffee Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })

  }

  return (

    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Update Toy</h2>
      <form onSubmit={handleUpdate}>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input type="text" name="name" defaultValue={price} placeholder="price" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input type="text" name="details" defaultValue={description} placeholder="details" className="input input-bordered w-full" />
            </label>
          </div>

        </div>
        <input type="submit" value="Update Coffee" className="btn btn-block" />

      </form>
    </div>



    // <div className="my-12 w-1/2 mx-auto">
    //   <h2 className="text-3xl mb-6 text-center">Update Toy</h2>
    //   <form onSubmit={handleUpdate}>
    //     <div className="form-field flex">
    //       <label htmlFor="price">Price:</label>
    //       <input
    //         type="number"
    //         id="price"
    //         value={price}
    //         onChange={(e) => setPrice(e.target.value)}
    //         className="input-field border rounded-md ms-2 w-full"
    //       />
    //     </div>

    //     <div className="form-field flex mt-4">
    //       <label htmlFor="quantity">Quantity:</label>
    //       <input
    //         type="number"
    //         id="quantity"
    //         value={quantity}
    //         onChange={(e) => setQuantity(e.target.value)}
    //         className="input-field border rounded-md ms-2 w-full"
    //       />
    //     </div>

    //     <div className="form-field flex mt-4">
    //       <label htmlFor="description">Description:</label>
    //       <textarea
    //         id="description"
    //         value={description}
    //         onChange={(e) => setDescription(e.target.value)}
    //         className="input-field border rounded-md ms-2 w-full"
    //       ></textarea>
    //     </div>

    //     <div className="text-center mt-4">
    //       <input type="submit" value="Update Toy" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" />
    //     </div>
    //   </form>
    // </div>

  );
};

export default UpdateMyToy;
