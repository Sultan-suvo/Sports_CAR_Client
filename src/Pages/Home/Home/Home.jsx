import FeedbackSection from "../../FeedbackSection/FeedbackSection";
import Banner from "../Banner/Banner";
import SportsGallery from "../SportsGallery/SportsGallery";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SportsGallery></SportsGallery>
            <FeedbackSection></FeedbackSection>
        </div>
    );
};

export default Home;