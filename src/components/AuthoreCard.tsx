"use client"

export default function AuthorCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <img
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
          src="/images/pic.png"
          alt="Author Image"
          
        />
        <div>
          <h3 className="text-xl font-bold"> Sehrish Munir</h3>
          <p className="text-slate-500">
            {" "}
            AI Engineer | SEO Expert | Web Developer{" "}
          </p>
        </div>
      </div>

      <p className="mt-4 text-black leading-relaxed">
        Sehrish Munir is an experienced electronics engineer with a passion for
        web development through articles
      </p>

      <div className="mt-4 flex space-x-3">
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Twitter
        </a>

        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-800 rounded-md hover:bg-blue-700 transition duration-300"
        >
          LinkedIn
        </a>

        
        <a
          href="#"
          className="px-4 py-2 text-white bg-black rounded-md hover:bg-blue-700 transition duration-300"
        >
          GitHub
          </a>

          <a
          href="#"
          className="px-4 py-2 text-white bg-red-700 rounded-md hover:bg-blue-600 transition duration-300"
        >
          YouTube
          </a>
      </div>
    </div>
  );
}
