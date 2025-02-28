
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ClassesSectionCard from "./ClassesSectionCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Marquee from "react-fast-marquee";

const ClassesSection = () => {
    const axiosPublic = useAxiosPublic();

    const {data: classes =[] } = useQuery({
        queryKey: ['class'],
        queryFn: async () =>{
            const {data} = await axiosPublic.get('/class')
            return data;
        }

    })


    return (
        <div className="my-20">
                  <SectionTitle
        subHeading="Explore our top fitness classes designed to help you stay active, strong, and motivated every day."
        heading="Featured Classes"
      ></SectionTitle>
      <div className="flex gap-6 justify-center mt-16">

        <Marquee>
        {
            classes.slice(0, 4).map(item => <ClassesSectionCard 
                key={item._id}
                item={item}
                ></ClassesSectionCard>)
        }
        </Marquee>
       
      </div>
        </div>
    );
};

export default ClassesSection;