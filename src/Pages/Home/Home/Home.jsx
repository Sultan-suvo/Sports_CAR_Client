import FeedbackSection from "../../FeedbackSection/FeedbackSection";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import SportsGallery from "../SportsGallery/SportsGallery";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <SportsGallery></SportsGallery>
            <ShopByCategory></ShopByCategory>
            <FeedbackSection></FeedbackSection>           
        </div>
    );
};

export default Home;