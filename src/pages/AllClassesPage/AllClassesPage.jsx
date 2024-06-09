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
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
 
      {
        classes.map((item) => 
          <div key={item._id} className="max-w-md p-8 sm:flex sm:space-x-6 bg-gray-900 rounded-xl dark:bg-gray-50 text-gray-100 dark:text-gray-800">
        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img src={item.image} alt="" className="object-cover object-center w-full h-full rounded-xl bg-gray-500 dark:bg-gray-500" />
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl font-extrabold mb-2">{item.className}</h2>
            <p className="text-sm text-gray-400 dark:text-gray-600"><span className="font-bold mr-2 mt-2">Description:</span> {item.description}</p>
            <h2 className="text-2xl font-semibold mt-2"> Trainer******</h2>
            <p >---------------------------</p>
          </div>
          <div className="space-y-1">
            <div className="grid grid-cols-3 items-center space-x-2">
            <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
            <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
            <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
            </div>
          
          </div>
        </div>
      </div>)
      }
     
    
   
</div>
        </div>
    );
};

export default AllClassesPage;