import img1 from "./assets/calculator.png"
import img2 from "./assets/html-5.png"
import img3 from "./assets/imgage.jpg"
import img4 from "./assets/js.png"
import img5 from "./assets/css-3.png"
import img6 from "./assets/react.png"
import img7 from "./assets/Todolist.webp"




function Portfolio() {
  return (
    <>
    {/* About Section */}
<div className="flex flex-wrap items-center" id="Home">
      <div className="w-full md:w-1/2 p-4">
        <img
          src={img3}
          alt="Image"
          className="rounded-full h-auto w-56 md:w-[450px] md:h-[450px] mx-auto md:mx-auto mt-6"
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <h2 className="font-bold">I'M frontend developer</h2>
        <p className="text-lg mt-4 border-b-red-400">
          I am a motivated and versatile individual, always eager to take on new
          challenges. With a passion for learning I am dedicated to delivering
          high-quality results. With a positive attitude and a growth mindset, I
          am ready to make a meaningful contribution and achieve great things.
        </p>
      </div>


      {/* Project section */}
      <div className="container mx-auto py-12 px-10" id="Projects">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="flex flex-wrap justify-center -mx-4">
        {/* Project 1 */}
        <div className="w-full md:w-1/3 px-4 mb-8">
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img src={img1} alt="Project 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Calculator</h3>
              <p className="text-gray-700 mb-4">
                Implemented the core logic for performing arithmetic operations using JavaScript. Designed a user-friendly interface with HTML and styled it with CSS for a modern and intuitive user experience.
              </p>
              <a href="https://github.com/dashboard" className="text-blue-500 hover:underline">Github</a>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="w-full md:w-1/3 px-4 mb-8">
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img src={img7} alt="Project 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">TODO-LIst</h3>
              <p className="text-gray-700 mb-4">
                Implemented CRUD (Create, Read, Update, Delete) functionality for managing tasks, allowing users to add, edit, delete, and mark tasks as completed. Utilized modern web technologies such as HTML5, CSS3, and JavaScript to create a dynamic and interactive user interface.
              </p>
              <a href="https://github.com/dashboard" className="text-blue-500 hover:underline">Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Skills section */}

    <div className="container mx-auto py-12 px-12" id="Skills">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center items-stretch">
        {/* HTML */}
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img src={img2} alt="HTML Logo" className="mx-auto h-16" />
            <h3 className="text-xl font-bold text-center mt-4">HTML</h3>
          </div>
        </div>
        {/* CSS */}
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img src={img5} alt="CSS Logo" className="mx-auto h-16" />
            <h3 className="text-xl font-bold text-center mt-4">CSS</h3>
          </div>
        </div>
        {/* JavaScript */}
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img src={img4} alt="JavaScript Logo" className="mx-auto h-16" />
            <h3 className="text-xl font-bold text-center mt-4">JavaScript</h3>
          </div>
        </div>
        {/* ReactJS */}
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img src={img6} alt="React Logo" className="mx-auto h-16" />
            <h3 className="text-xl font-bold text-center mt-4">ReactJS</h3>
          </div>
        </div>
      </div>
    </div>

    {/* Education */}

    <div className="container mx-auto py-12" id="Education">
      <h2 className="text-3xl font-bold text-center mb-8">Education</h2>

      {/* Bachelor's Degree */}
      <div className="max-w-sm mx-auto">
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h3 className="text-xl font-bold mb-2">Bachelor's Degree</h3>
          <p className="text-gray-700 mb-2">VISWA BHARATIYA VIDYA PARSHID</p>
          <p className="text-gray-700 mb-2">Bachelor of Science in Computer Science</p>
          <p className="text-gray-700">Year: 2020 - 2024</p>
        </div>
      </div>

      {/* Intermediate */}
      <div className="max-w-sm mx-auto mt-8">
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h3 className="text-xl font-bold mb-2">Intermediate</h3>
          <p className="text-gray-700 mb-2">MSR juniour college</p>
          <p className="text-gray-700 mb-2">Intermediate in Science</p>
          <p className="text-gray-700">Year: 2018 - 2020</p>
        </div>
      </div>
    </div>

    {/* contact section */}
    <div className="container mx-auto py-12" id="Contact">
      <div className="w-full max-w-xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">Contact Us</h5>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Ranjith reddy"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="ranjith@88.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 resize-none dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter your message here"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    
    </div>
    </>
  )
}

export default Portfolio