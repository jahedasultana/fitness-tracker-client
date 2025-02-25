import { IoMdFitness } from "react-icons/io";

export default function SectionTitle({ heading, subHeading }) {
  return (
    <section className="px-4 py-6 md:py-10 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-2 lg:grid-cols-2 lg:gap-12">
          <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold tracking-tight flex items-center gap-2">
            <IoMdFitness/>
           {heading}
          </h1>
          <p className="md:text-lg text-xs">
            {subHeading || "How to Personalize Your Fitness Journey Based on Your Goals, Lifestyle, and Abilities."}
          </p>
        </div>
      </div>
    </section>
  )
}