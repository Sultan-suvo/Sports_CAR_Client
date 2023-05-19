import { useEffect } from "react";
import { useState } from "react";
import GalleryCard from "./GalleryCard";

const SportsGallery = () => {
    const [gallerys, setGallerys] = useState([])

    useEffect(() => {
        fetch('gallery.json')
            .then(res => res.json())
            .then(data => setGallerys(data))
    }, [])

    return (
        <div className="mt-12 mx-auto">
            <div className='text-center'>
                <h1 className=' text-4xl font-bold mb-8'>Sports Car Gallery</h1>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
                {
                    gallerys.map(gallery => <GalleryCard
                        key={gallery.id}
                        gallery={gallery}
                    ></GalleryCard>)
                }
            </div>
        </div>
    );
};

export default SportsGallery;