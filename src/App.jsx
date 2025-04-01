import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const App = () => {
  const phoneNumber = 7481072653
  const message = encodeURIComponent('Hello 🌟 Thalapathy Book, I want a new Id')
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`

  return (
    <>
      <div className="bg-[#0f1b31] min-h-screen flex flex-col items-center text-white px-4 py-10 md:py-20">
        
      <a href={whatsappUrl} target="_self">
            <img src="/images/logo.jpeg" alt="image" className=" w-100 rounded-lg shadow-lg" />
          </a>
        <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400 p-4 md:p-10 text-center">
            Thala Pathy online <br/> book
        </h1>
        <p className='p-2 sm:p-3 text-center'>GET YOUR !D NOW ON WHATSAPP👇🏼</p>
        <p className="text-lg mb-4 animate-updown">👇👇</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25d366] hover:bg-green-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full flex items-center gap-2 text-lg transition-transform duration-300 hover:scale-105 animate-pop"
        >
          <FaWhatsapp className="text-2xl" />
          Whatsapp Now
          <FaWhatsapp className="text-2xl" />
        </a>

        
        <div className="p-5 sm:p-10 w-full max-w-xs sm:max-w-md">
          <a href={whatsappUrl} target="_self">
            <img src="/images/h1.png" alt="image" className="w-full rounded-lg shadow-lg" />
          </a>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25d366] hover:bg-green-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full flex items-center gap-2 text-lg transition-transform duration-300 hover:scale-105 animate-pop"
        >
          <FaWhatsapp className="text-2xl" />
          Whatsapp Now
          <FaWhatsapp className="text-2xl" />
        </a>
        <div className="flex flex-col justify-between text-center space-y-2 sm:space-y-4">
          <p className="p-2">GET 10% BONUS ON FIRST DEPOSIT</p>
          <p className="p-2">24/7 WITHDRAWAL & DEPOSIT</p>
          <p className="p-2">24/7 CUSTOMER SUPPORT</p>
          <p className="p-2 text-yellow-300">विश्वास का धंदा विश्वास के साथ |</p>
          <p className="p-2 text-yellow-300">| पैसा आपका भरोसा हमारा</p>
        </div>
      </div>
    </>
  )
}

export default App
