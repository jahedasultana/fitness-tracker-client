import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import AboutUs from "../AboutUs/AboutUs";
import ClassesSection from "../ClassesSection/ClassesSection";
import Testimonials from "../Testimonials/Testimonials";
import OurTeam from "./OurTeam/OurTeam";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
    return (
        <div>
          <Helmet>
                <title>Fitness-Tracker | Home</title>
            </Helmet>
            <Banner></Banner>
            <Featured></Featured>
            <AboutUs></AboutUs>
            <ClassesSection></ClassesSection>
            <Testimonials></Testimonials>
            <Subscribe></Subscribe>
            <OurTeam></OurTeam>
          
        </div>
    );
};

export default Home;