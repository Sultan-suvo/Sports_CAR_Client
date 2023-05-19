
const GalleryCard = ({ gallery }) => {

    const {  img, title,description,price,year } = gallery
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="rounded-md mt-4 h-36 w-48" src={img}alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p className="text-slate-500">{description}</p>
                <p className="font-bold">price: <span className="text-orange-700">{price}</span></p>
                <p className="font-bold">Year : <span className="text-orange-700">{year}</span></p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default GalleryCard;