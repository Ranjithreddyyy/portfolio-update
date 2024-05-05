import react  from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center md:flex-row justify-evenly">
        <div className="md:order-last">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-2">ANDHRA PRADESH, INDIA</p>
          <p className="mb-2"><a href="mailto:ranjithreddy9573@gmail.com">ranjithreddy9573@gmail.com</a></p>
          <p><a href="tel:+917815987605">7815987605</a></p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white hover:text-gray-300"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white hover:text-gray-300"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <nav className="mt-8 md:mt-0">
          <a href="#Home" className="text-gray-300 hover:text-white block mb-2">Home</a>
          <a href="#Projects" className="text-gray-300 hover:text-white block mb-2">Projects</a>
          <a href="#Skills" className="text-gray-300 hover:text-white block mb-2">Skills</a>
          <a href="#Education" className="text-gray-300 hover:text-white block mb-2">Education</a>
          <a href="#Contact" className="text-gray-300 hover:text-white block mb-2">Contact</a>
        </nav>
      </div>
      <p className="text-center mt-8 text-gray-300">&copy; 2024 Ranjith reddy!. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default Footer