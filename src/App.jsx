
import { FaWhatsapp } from "react-icons/fa";


const App = () => {
  const phoneNumber = '+441346350273'
  const message = encodeURIComponent('Hello👋 i want Thalapathy B00k 🆔')
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`



  return (
    <>
      <div className="bg-[#111214] min-h-screen flex flex-col items-center text-white px-4 py-10 md:py-20">

        <a href={whatsappUrl} target="_self">
          <img src="/images/logo2.png" alt="logo" className="w-100 rounded-lg shadow-lg bg-white" />
        </a>

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
            <img src="/images/h4.jpeg" alt="image" className="w-full rounded-lg shadow-lg" />
          </a>
        </div>
       <div>
       </div>
        <footer className="w-full text-center text-xs sm:text-sm text-gray-400 mt-10 py-4 border-t border-gray-600 px-6">
          <p>18+ | Gamble Responsibly. This game involves financial risk and may be addictive.</p>
          <p>Please gamble responsibly and only with money you can afford to lose.</p>
          <p>If you or someone you know has a gambling problem, please seek help.</p>
          <p className="mt-2 font-semibold text-white">📞 Contact Us</p>
        </footer>

      </div>

    </>
  )
}

export default App
