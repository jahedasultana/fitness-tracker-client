const ClassesSectionCard = ({ item }) => {
  const { image, description, className } = item;
  return (
  
    <div className="flex max-w-sm flex-col justify-center p-2 mx-2 shadow-md rounded-xl sm:px-8 dark:bg-gray-900 dark:text-gray-800 border-b-4 border-t border-r border-l border-b-[#133C55] dark:border-t-0 dark:border-r-0 dark:border-l-0">
    <img src={image} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
    <div className="space-y-4 text-center divide-y dark:divide-gray-300">
      <div className="my-2 space-y-1">
        <h2 className="text-xl text-gray-700 dark:text-gray-300 font-extrabold sm:text-2xl">{className}</h2>
        <p className="px-5 text-xs sm:text-base  text-gray-700 dark:text-gray-400">{description.slice(0,36)}..</p>
      </div>
     
    </div>
  </div>
  );
};

export default ClassesSectionCard;
