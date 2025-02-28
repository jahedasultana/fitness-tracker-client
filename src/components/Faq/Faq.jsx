import { useState } from "react";

import SectionTitle from "../SectionTitle/SectionTitle";

const Faq = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "What are your gym's operating hours?",
      answer:
        "Our gym is open from 6 AM to 10 PM on weekdays and 8 AM to 8 PM on weekends.",
    },
    {
      question: "Do you offer personal training sessions?",
      answer:
        "Yes, we provide personal training sessions with certified trainers. Sessions can be booked at an additional cost.",
    },
    {
      question: "Is there a membership discount available?",
      answer:
        "We offer seasonal discounts on memberships. Check our website or visit our gym for the latest promotions.",
    },
    {
      question: "What equipment is available in your gym?",
      answer:
        "We have a wide variety of equipment, including treadmills, weight machines, free weights, and cardio machines.",
    },
    {
      question: "Are group fitness classes included in the membership?",
      answer:
        "Yes, group fitness classes such as yoga, spin, and strength training are included in most membership plans.",
    },
  ];

  return (
    <div className="container  mx-auto p-5 md:space-y-12 space-y-6">
     
      <SectionTitle heading={"Gym FAQ"} subHeading={"Find answers to common questions about our gym, classes, memberships, and fitness programs."}></SectionTitle>

      <div className="md:w-[60%] w-full pt-2 mx-auto h-[175px]">
        {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b pb-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-medium">{faq.question}</h3>
            <button
              className="text-xl font-normal w-7 h-7 text-white bg-gray-700 rounded-full"
              aria-expanded={open === index}
            >
              {open === index ? "-" : "+"}
            </button>
          </div>
          <div
            className={`mt-2 text-gray-600 transition-all duration-300 ease-in-out ${
              open === index ? "block" : "hidden"
            }`}
          >
            {faq.answer}
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
