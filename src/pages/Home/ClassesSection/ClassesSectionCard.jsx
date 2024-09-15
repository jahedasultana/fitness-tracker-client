const ClassesSectionCard = ({ item }) => {
  const { image, description, total_bookings, className } = item;
  return (
    <div className="flex space-x-4">
      <img
        style={{ borderRadius: "50%" }}
        className="w-[120px] h-[120px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase flex flex-wrap text-violet-500 font-bold text-lg">
          {className}<span>
            </span> 
        </h3>
        
        <p>{description}</p>
      { total_bookings && <p className="font-bold">Booking: {total_bookings}</p>}
      </div>
    </div>
  );
};

export default ClassesSectionCard;
