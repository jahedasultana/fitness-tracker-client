const SectionTitle = ({ heading, subHeading }) => {
    return (
      <div className="mx-auto text-center md:w-4/12 my-8">
        <p className="text-violet-500 font-semibold mb-2">_____
          {subHeading}_____</p>
          <p className="font-bold text-lg">-------------------------------------------------------</p>
        <h3 className="text-4xl uppercase py-4">{heading}</h3>
          <p className="font-bold text-lg">-------------------------------------------------------</p>
      </div>
    );
  };
  
  export default SectionTitle;