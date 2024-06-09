import React from 'react'
import heroImg from "../assets/newblock.png"
const Hero = () => {
  return (
    <div className="flex h-[60vh] md:h-[80vh] mt-[80px] dark:bg-gradient-to-b dark:from-gray-900 dark:to-black bg-[#F7F4FD] items-center justify-center " >
   
    <div className=' md:w-2/3 w-full px-8 text-center md:px-16 font-bold dark:text-white text-[#1C1678]  '>
      <h1 className="md:text-4xl text-2xl font-poppins md:p-4 md:m-4 m-2 md:leading-[60px]">Discover Blockchain  Technology with
        <span className='px-3 text-blue-500'>Kairaa Blockchain Academy&#x27;s</span> Online Course.</h1>
      <p className=' font-medium  m-4 md:text-2xl text-xl font-josefin '>Kairaa Blockchain Academy is a leading online platform specializing in blockchain education.</p>
       <button className='  text-white w-fit md:px-6 md:py-3 p-2 my-2 md:text-xl text-lg rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer z-20 hover:scale-110 duration-300'>Get Started</button>
    </div>
    <div className='w-1/2  hidden md:block'>
      <img alt='banner' className='w-[400px] h-[400px]' src={heroImg} />
    </div>

    <div>

    </div>


  </div>
  )
}

export default Hero
