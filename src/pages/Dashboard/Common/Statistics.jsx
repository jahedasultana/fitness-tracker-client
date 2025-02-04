import useRole from "../../../hooks/useRole";



const Statistics = () => {
    const [role] = useRole();
    return (
        <div className="text-center mt-52">
            <h2 className="text-5xl font-extrabold text-[#133C55]/90">Welcome to: <span className="uppercase">--{role}--</span></h2>
            <p className="font-extrabold mt-2">---------------------------------------------</p>
        </div>
    );
};

export default Statistics;