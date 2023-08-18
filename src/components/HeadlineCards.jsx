import React from 'react'

const HeadlineCards = () => {
  return (
    <div  className='max-w-[1640px] mx-auto p-4 py-12 grid md: grid-cols-3 gap-6 ' >
        {/* Card */}
        <div className='rounded-xl relative '  >
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white ' >
                <p className='font-bold text-2xl px-2 pt-4  ' >Bahçıvan</p>
                <p className='px-2' >Beyaz peynirler</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 ' >Ürünleri gör</button>

            </div>
            <img
            className='max-h-[160x] md:max-h-[200px] w-full object-cover rounded-xl '
            src='https://www.bahcivanpeynir.com/uploads/image/131f3047d08fe8b971c7bbdc3a0f5513-1602592328137.png'
            alt=''
            ></img>
        </div>

        {/* Card */}
        <div className='rounded-xl relative '  >
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white ' >
                <p className='font-bold text-2xl px-2 pt-4  ' > Bahçıvan</p>
                <p className='px-2' >Kaşar,Tost ve Mozzarella peynirleri</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 ' >Ürünleri gör</button>


            </div>
            <img
            className='max-h-[160x] md:max-h-[200px] w-full object-cover rounded-xl '
            src='https://www.bahcivanpeynir.com/uploads/image/262228897f16b824faaf5707b2222246-1607094989406.png'
            alt=''
            ></img>
        </div>

        {/* Card */}
        <div className='rounded-xl relative '  >
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white ' >
                <p className='font-bold text-2xl px-2 pt-4  ' > Bahçıvan </p>
                <p className='px-2' >Laktossuz Peynirler</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 ' >Ürünleri gör</button>


            </div>
            <img
            className='max-h-[160x] md:max-h-[200px] w-full object-cover rounded-xl '
            src='https://www.bahcivanpeynir.com/uploads/image/7bfc820535cb8b761abf4a4ad6408a38-1654673502265.png'
            alt=''
            ></img>
        </div>


        
    </div>
  )
}

export default HeadlineCards