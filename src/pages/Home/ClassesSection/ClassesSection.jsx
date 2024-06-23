
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ClassesSectionCard from "./ClassesSectionCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


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
        subHeading="total booking counts"
        heading="Featured Classes"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {
            classes.slice(0, 4).map(item => <ClassesSectionCard 
                key={item._id}
                item={item}
                ></ClassesSectionCard>)
        }
      </div>
        </div>
    );
};

export default ClassesSection;