import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FeaturedCard from "./FeaturedCard";


const Featured = () => {
    return (
        <div>
             <SectionTitle
        subHeading="Discover the best fitness gear and essentials to boost your workouts and achieve your health and fitness goals."
        heading="Feature Item"
      ></SectionTitle>
        <FeaturedCard></FeaturedCard>

        </div>
    );
};

export default Featured;