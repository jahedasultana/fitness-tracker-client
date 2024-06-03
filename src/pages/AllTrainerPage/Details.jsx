import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";


const Details = () => {
    const {id} = useParams();
    const axiosPublic = useAxiosPublic();

    const { data: trainer = {} } = useQuery({
      queryKey: ["trainer", id],
      queryFn: async () => {
        const { data } = await axiosPublic.get(`/trainer/${id}`);
        return data;
      },
    });
    return (
        <div>
            
        </div>
    );
};

export default Details;