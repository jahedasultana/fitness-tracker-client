import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Subscribe = () => {
    return (
        <div className="mb-20">
            <SectionTitle
        heading="Newsletter"
      ></SectionTitle>
            <section className="p-6 bg-gray-800 dark:bg-gray-100 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800 text-gray-100 dark:text-gray-800">
	<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-900 dark:bg-gray-50 bg-gray-900 dark:bg-gray-50">
			
			<h1 className="text-5xl font-extrabold text-gray-50 dark:text-gray-900 mb-12 text-gray-50 dark:text-gray-900"> Subscription</h1>
			
			<form noValidate="" action="" className="self-stretch space-y-3">
				<div>
					<label htmlFor="name" className="text-sm sr-only">Your name</label>
					<input id="name" type="text" 
                    name="name"
                    placeholder="Your name" className="w-full p-4 rounded-md focus:ring focus:ring-violet-400 focus:dark:ring-violet-600 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300 border-gray-700 dark:border-gray-300" />
				</div>
				<div>
					<label htmlFor="lastname" className="text-sm sr-only">Email address</label>
					<input id="lastname" type="email"
                    name="email"
                    placeholder="Email address" className="w-full p-4 rounded-md focus:ring focus:ring-violet-400 focus:dark:ring-violet-600 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300 border-gray-700 dark:border-gray-300" />
				</div>
				<button type="button" className="w-full py-4 font-semibold rounded bg-violet-400 dark:bg-violet-600 bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50">Subscribe Now</button>
			</form>
		</div>
		<img src="https://i.ibb.co/c2Sk39G/sojib.jpg" alt="" className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500" />
	</div>
</section>
        </div>
    );
};

export default Subscribe;