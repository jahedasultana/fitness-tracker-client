
const ClassesSectionCard = ({item}) => {
    const {image, title, description, total_bookings} = item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: '50%'}} className="w-[120px] h-[120px]"  src={image} alt="" />
            <div>
                <h3 className="uppercase text-violet-500 font-bold text-lg">{title}*****************</h3>
                <p>{description}</p>
                <p className="font-bold">Booking: {total_bookings}</p>
              
            </div>
              
          
        </div>
    );
};

export default ClassesSectionCard;