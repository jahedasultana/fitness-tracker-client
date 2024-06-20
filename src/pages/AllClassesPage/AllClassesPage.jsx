import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ClassCard from "./ClassCard";

const AllClassesPage = () => {
    const axiosPublic = useAxiosPublic();

    const { data: allClass = [], isLoading } = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/class')
            return data
        }

    })
    console.log(allClass)

    if (isLoading) return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    return (
        <div className="grid md:grid-cols-3 gap-6 my-16 shadow-lg">
            {/* map here */}
            {allClass.map((singleClass) => <ClassCard key={singleClass._id} singleClass={singleClass} ></ClassCard>)}
        </div>
    );
};

export default AllClassesPage;