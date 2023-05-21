import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddToyPage = () => {
  useTitle('add Toys')
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    const pictureUrl = form.pictureUrl.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const addToysDetails = {
        pictureUrl,
        name,
        sellerName,
        sellerEmail,
        subcategory,
        price,
        rating,
        quantity,
        description
    }
    console.log(addToysDetails);

    fetch('https://assignment-11-server-six-tawny.vercel.app/addToys',{
        method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToysDetails)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success',
                text: 'Toy Added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              form.reset();
        }
    })
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add A Toy</h2>
      <form onSubmit={handleSubmit} className="flex flex-wrap">
        <div className="w-full md:w-1/2 md:pr-2 mb-4">
          <label htmlFor="pictureUrl" className="block font-semibold mb-1">Picture URL</label>
          <input
            type="text"
            id="pictureUrl"
            name='pictureUrl'
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            required
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-2 mb-4">
          <label htmlFor="name" className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"          
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            required
          />
        </div>
        <div className="w-full md:w-1/2 md:pr-2 mb-4">
          <label htmlFor="sellerName" className="block font-semibold mb-1">Seller Name</label>
          <input
            type="text"
            id="sellerName"
            name="sellerName"        
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-2 mb-4">
          <label htmlFor="sellerEmail" className="block font-semibold mb-1">Seller Email</label>
          <input
            type="email"
            defaultValue='sulthansuvo@gmail.com'
            id="sellerEmail"
            name="sellerEmail" 
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
          />
        </div>
        <div className="w-full md:w-1/2 md:pr-2 mb-4">
          <label htmlFor="subcategory" className="block font-semibold mb-1">Sub-category</label>
          <select
            id="subcategory"
            name="subcategory" 
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            required
          >
            <option value="">Select Sub-category</option>
            <option value="Math Toys">Math Toys</option>
            <option value="Language Toys">Language Toys</option>
            <option value="Science Toys">Science Toys</option>
          </select>
        </div>
        <div className="w-full md:w-1/2 md:pl-2 mb-4">
          <label htmlFor="price" className="block font-semibold mb-1">Price</label>
          <input
            type="text"
            id="price"
           name="price"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            required
          />
        </div>
        <div className="w-full md:w-1/2 md:pr-2 mb-4">
          <label htmlFor="rating" className="block font-semibold mb-1">Rating</label>
          <input
            type="text"
            id="rating"
            name="rating"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            required
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-2 mb-4">
          <label htmlFor="quantity" className="block font-semibold mb-1">Available Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            required
          />
        </div>
        <div className="w-full mb-4">
          <label htmlFor="description" className="block font-semibold mb-1">Description</label>
          <textarea
            id="description"
            name="description"
           
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            required
          ></textarea>
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600"
          >
            Add Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToyPage;
