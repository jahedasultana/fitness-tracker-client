import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ClassCard from "./ClassCard";
import { useState } from "react";
import { Pagination } from "flowbite-react";



const AllClassesPage = () => {
  const axiosPublic = useAxiosPublic();

  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  const { data: allClass = []} = useQuery({
    queryKey: ["class", currentPage],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/class-home?page=${currentPage}`);
      setTotalPage(data.totalPages);
      return data.data;
    },
  });

  return (
    <div >
      {/* map here */}
      <div className="grid md:grid-cols-3 gap-6 my-16 shadow-lg">
        {allClass.map((singleClass) => (
          <ClassCard
            key={singleClass._id}
            singleClass={singleClass}
          ></ClassCard>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPage}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default AllClassesPage;
