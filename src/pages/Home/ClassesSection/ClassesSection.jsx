import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ClassesSectionCard from "./ClassesSectionCard";


const ClassesSection = () => {

    const [classes, setClasses] = useState([]);
    useEffect(()=>{
        fetch('fake-data.json')
        .then(res => res.json())
        .then(data => {
            const popularClasses = data.filter(item => item.category === "popular")
            setClasses(popularClasses)
        
        })
    },[])
    return (
        <div className="my-20">
                  <SectionTitle
        subHeading="total booking counts"
        heading="Featured Classes"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {
            classes.map(item => <ClassesSectionCard 
                key={item._id}
                item={item}
                ></ClassesSectionCard>)
        }
      </div>
        </div>
    );
};

export default ClassesSection;