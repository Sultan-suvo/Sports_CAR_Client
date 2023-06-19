import FeedbackSection from "../../FeedbackSection/FeedbackSection";
import Banner from "../Banner/Banner";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import SportsGallery from "../SportsGallery/SportsGallery";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SportsGallery></SportsGallery>
            <ShopByCategory></ShopByCategory>
            <FeedbackSection></FeedbackSection>           
        </div>
    );
};

export default Home;