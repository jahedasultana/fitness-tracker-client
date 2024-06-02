const SectionTitle = ({ heading, subHeading }) => {
    return (
      <div className="mx-auto text-center md:w-4/12 my-8">
        <p className="text-violet-500 font-semibold mb-2">_____
          {subHeading}_____</p>
        <h3 className="text-4xl uppercase border-y-4 py-4">{heading}</h3>
      </div>
    );
  };
  
  export default SectionTitle;