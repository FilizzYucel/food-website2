import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 ' >
        <div className='max-h-[500px] relative ' >
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/10 flex flex-col justify-center ' >
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold' >En <span className='text-red-700 ' >İyi </span> </h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold' >Peynirlerin <span className='text-red-700' >Adresi</span> </h1>
            </div>
            <img className='w-full max-h-[500px] object-cover '
            src='https://i.ytimg.com/vi/op6RmhbYMxE/maxresdefault.jpg'
            alt='/'
            ></img>
        </div>
    </div>
  )
}

export default Hero