import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {
    return (
        <div>
          <Helmet>
                <title>Fitness-Tracker | Home</title>
            </Helmet>
            <Banner></Banner>
            <Featured></Featured>
            <AboutUs></AboutUs>
          
        </div>
    );
};

export default Home;