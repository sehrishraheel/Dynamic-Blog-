import React from "react";

export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-neutral-100 mb-40">
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600    ">
          Sehrish Muneer : Navigating the Secrets of Technology in Tech
          Chronicles Blog!
        </h2>

        <p className="text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up default:delay-100">In a world where technology is constantly evolving, Sehrish Muneer stands as a guiding force, uncovering the mysteries and intricacies of the digital landscape. Through her insightful Tech Chronicles Blog, she shares her expertise and deep understanding of the ever-changing tech world. Whether it&aposs exploring cutting-edge innovations or delving into the complexities of emerging technologies, Sehrish&pops perspective offers a fresh lens through which readers can navigate the future of tech. Join her as she explores the breakthroughs, challenges, and hidden gems of the technological universe, all while offering readers practical insights and inspiration.

</p>

<div className="mx-auto max-w-7xl px-5">
   <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change"> Exploring Our Categories</h1>
   <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
     {[
      "Artificial Intelligence",
      "HTML",
      "Web Development",
      "Next JS",
      "Block Chain",
      "Deep Learning",
     ].map((category, index) =>(
      <div key={index}
      className="relative group p-6 bg-white rounded-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600:">
        <p className="text-center text-lg font-semibold">{category}</p>
        <div className="absolute inset-0 border-2 border-transparent hover:border-white rounded-lg transition duration-300 ease-in-out ">

        </div>

      </div>
     ))}
   </div>
</div>

<p className="text-sm md:text-base text-black mb-6 px-y animate-fade-in-down delay-100 mt-10">
The technology world is constantly evolving, with innovations like Artificial Intelligence, Deep Learning, and Next.js transforming industries. Blockchain is reshaping security, while HTML remains the foundation of the digital world. As technology continues to advance, it opens up new possibilities, driving progress and shaping our future.
</p>
      </section>
    </div>
  );
}
