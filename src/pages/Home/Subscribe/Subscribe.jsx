import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const Subscribe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubscribe = (event) => {
    event.preventDefault();

    const subscriptionData = {
      name,
      email,
    };

    fetch("https://fitness-tracker-server-lemon.vercel.app/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subscriptionData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Subscribed successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          setName("");
          setEmail("");
        }
      });
  };

  return (
    <div>
      <SectionTitle heading="Newsletter" subHeading="Subscribe to our newsletter for fitness tips, exclusive offers, and the latest updates on health and training." />
      <section className="p-6 text-gray-100 dark:text-gray-800">
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900 bg-gray-200">
            <h1 className="text-5xl font-extrabold mb-12 text-gray-700 dark:text-gray-300">
              Subscription
            </h1>
            <form onSubmit={handleSubscribe} className="self-stretch space-y-3">
              <div>
                <label htmlFor="name" className="text-sm sr-only">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full p-4 rounded-md focus:ring focus:ring-violet-400
                                    border border-gray-300 dark:border-gray-700
                                    dark:bg-gray-800
                                    text-gray-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full p-4 rounded-md focus:ring focus:ring-violet-400 
                                    border border-gray-300 dark:border-gray-700
                                    dark:bg-gray-800
                                    text-gray-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 font-semibold rounded bg-[#133c55] dark:bg-[#133c55] text-gray-200 dark:text-gray-50"
              >
                Subscribe Now
              </button>
            </form>
          </div>
          <img
            src="https://i.ibb.co/c2Sk39G/sojib.jpg"
            alt=""
            className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500 dark:bg-gray-500"
          />
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
