import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const AllClassesPage = () => {

    const axiosPublic = useAxiosPublic();

    const {data: classes =[] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () =>{
            const {data} = await axiosPublic.get('/classes')
            return data;
        }

    })
    return (
        <div>
          <div className="overflow-x-auto my-16 rounded-xl bg-violet-400">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-lg">
        <th>*</th>
        <th>Class Name</th>
        <th>Photo</th>
        <th>Description</th>
        <th>Trainer</th>
      </tr>
    </thead>
    <tbody>
      {
        classes.map((item, index) =>  <tr key={item._id}>
            <th>{index+1}</th>
            <td className="font-extrabold">{item.title}</td>
            <td>
                <img className="w-40 h-40 rounded-xl" src={item.image} alt="" />
            </td>
            <td className="w-80"><span className="font-extrabold">***</span>{item.description}</td>
            <td className="flex gap-2">
            <img src="https://i.ibb.co/VNrnzW3/brunette-woman.jpg" alt="" className="object-cover object-center w-16 h-16 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
            <img src="https://source.unsplash.com/50x50/?portrait" alt="" className="object-cover object-center w-16 h-16 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
            <img src="https://source.unsplash.com/50x50/?portrait" alt="" className="object-cover object-center w-16 h-16 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
           
            </td>
          </tr>)
      }
     
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllClassesPage;