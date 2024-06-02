
const ClassesSectionCard = ({item}) => {
    const {image, title, description, total_bookings, category} = item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: '50%'}} className="w-[160px]" src={image} alt="" />
            <div>
                <h3 className="uppercase text-violet-500 font-bold text-lg">{title}*****************</h3>
                <p>{description}</p>
                <p className="font-bold">Booking: {total_bookings}</p>
                <button className="lg:px-8 px-3 py-3 m-2 lg:text-lg font-semibold rounded-lg dark:bg-violet-600 dark:text-gray-50">Details Page</button>
            </div>
              
          
        </div>
    );
};

export default ClassesSectionCard;