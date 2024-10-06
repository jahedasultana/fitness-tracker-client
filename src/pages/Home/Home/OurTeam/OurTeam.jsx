import SectionTitle from "../../../../components/SectionTitle/SectionTitle";


const OurTeam = () => {
    return (
        <div className="mb-20 mt-32 bg-[#FFFFFF] dark:bg-[#1D232A]">
            <SectionTitle
        subHeading="About Team"
        heading="Our team"
      ></SectionTitle>

<section className="py-6   dark:text-gray-300 text-gray-100">
	<div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
	
		<div className="flex flex-row flex-wrap-reverse justify-center">
			<div className="flex flex-col justify-center m-8 text-center bg-[#133c55]  p-8 rounded-md border border-gray-600">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500  dark:bg-gray-500" src="https://i.ibb.co/kMBt8t5/team-two.jpg" />
				<p className="text-2xl font-semibold leading-tight">David Leea</p>
                <p>------------------------------</p>
                <p className="w-60 text-left"><span className="font-bold mr-2">Bio:</span>David is a professional trainer with a background in sports science. He specializes in strength training and weight loss programs</p>
                <p>------------------------------</p>
                <p className="w-60 mt-2 text-left"><span className="font-bold mr-2">Expertise:</span> Yoga, Mindfulness, Holistic Wellness</p>
				
			</div>
			<div className="flex flex-col justify-center m-8 text-center bg-[#133c55] p-8 rounded-md border border-gray-600">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500 dark:bg-gray-500" src="https://i.ibb.co/kKnSMnD/team-three.jpg" />
				<p className="text-2xl font-semibold leading-tight">Megan Brown</p>
                <p>------------------------------</p>
                <p className="w-60 text-left"><span className="font-bold mr-2">Bio:</span>Megan is a yoga instructor and wellness coach who has been helping clients achieve their fitness goals through holistic approaches.</p>
                <p>------------------------------</p>
                <p className="w-60 mt-2  text-left"> <span className="font-bold mr-2">Expertise:</span>Performance Enhancement, Endurance Training, Sports Science</p>
				
			</div>
			<div className="flex flex-col justify-center m-8 text-center bg-[#133c55] p-8 rounded-md border border-gray-600">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500 dark:bg-gray-500" src="https://i.ibb.co/NVRwmKx/team-four.jpg" />
               
				<p className="text-2xl font-semibold leading-tight">Alex Johnson</p>
                <p>------------------------------</p>
                <p className="w-60 text-left"><span className="font-bold mr-2">Bio:</span>Alex is a certified personal trainer with over 10 years of experience in the fitness industry. He specializes in strength training and weight loss programs</p>
                <p>------------------------------</p>
                <p className="w-60 mt-2  text-left"> <span className="font-bold mr-2">Expertise:</span>Strength Training, Weight Loss, Nutrition</p>
			
			</div>

		</div>
	</div>
</section>
        </div>
    );
};

export default OurTeam;