import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FeaturedCard from "./FeaturedCard";


const Featured = () => {
    return (
        <div className="bg-[#FFFFFF] dark:bg-[#1D232A] ">
             <SectionTitle
        subHeading="Interactive Workouts"
        heading="Feature Item"
      ></SectionTitle>
        <FeaturedCard></FeaturedCard>

        </div>
    );
};

export default Featured;