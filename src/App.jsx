import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const App = () => {
  const phoneNumber = 7481072653
  const message = encodeURIComponent('Hello � Thalapathy Book , I want a new Id')
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`

  return (
    <>

      <div className="bg-[#0f1b31] min-h-screen flex flex-col items-center text-white p-20 ">
        <p className="text-lg mb-2">|| INDIA'S MOST TRUSTED<br />& OLDEST BOOK ||</p>
        <h1 className="text-4xl font-bold text-yellow-400 p-10">ThalaPathybook</h1>
        <p className=' p-3'>GET YOUR !D NOW ON WHATSAPP👇🏼</p>
        <p className=" text-1xl mb-4 animate-updown"> 👇👇</p>


        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25d366] hover:bg-green-500 text-white px-6 py-3 rounded-full flex items-center gap-2 text-lg transition-transform duration-300 hover:scale-105 animate-pop"
        >
          <FaWhatsapp className="text-2xl " />
          Whatsapp Now
          <FaWhatsapp className="text-2xl" />
        </a>
        <div className='p-10'>
          <a href={whatsappUrl} target='self'>
            <img src="/src/assets/h1.png" alt="image" className='w-100' />
          </a>
        </div>
        <div className='flex-col justify-between'>
          <p className='p-2 '> GET 10% BONUS ON FIRST DEPOSIT</p>
          <p className='p-2'>24/7 WITHDRAWAL & DEPOSIT</p>
          <p className='p-2'>24/7 CUSTOMER SUPPORT </p>
          <p className='p-2 text-yellow-300'>विश्वास का धंदा विश्वास के साथ | </p>
          <p className='p-2 text-yellow-300'>| पैसा आपका भरोसा हमारा</p>
        </div>
      </div>

    </>
  )
}

export default App