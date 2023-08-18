import React, { useState } from 'react'
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill, BsFillGiftFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { BiShoppingBag } from "react-icons/bi"
import { addToCart } from './Food'
import { data } from '../data/data'
import { Link } from 'react-router-dom'



const Navbar = () => {
    const [nav, setNav] = useState(false)

    //deneme 
    const [cardOpen, setCardOpen] = useState(false)

    const closeCard = () => {
        setCardOpen(null)
    }

    const [cartItems, setCartItems] = useState([]);

    // addToCart = (data) => {
    //     alert(data.name)
    //   };


    return (
        <div className='max-w-[1640px] mx-auto flex justify-between 
    items-center p-4  '>

            {/* Left SİDE */}
            <div className='flex items-center' >
                <div onClick={() => setNav(!nav)} className='cursor-pointer ' >
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2
         ' >Peynirci <span className='font-bold' >BAHÇIVAN</span> </h1>
                <div className='hidden lg:flex items-center bg-gray-200
        rounded-full p-1 text-[14px] ' >
                    <p className='bg-black text-white rounded-full p-2' >Delivery</p>
                    <p className='p-2' >Pickup</p>
                </div>
            </div>

            {/* search input  */}
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px]
sm:w-[400px] lg:w-[500px] ' >
                <AiOutlineSearch size={25} ></AiOutlineSearch>
                <input className='bg-transparent p-2 w-full focus:outline-none '
                    type='text' placeholder='Peynirleri arayın' ></input>
            </div>

            {/* Cart Button */}

            <div className='card' >
                <div onClick={() => setCardOpen(!cardOpen)} className='bg-black text-white hidden md:flex items-center
            py-2 rounded-full '  >
                    <button><BiShoppingBag className='cardIcon' size={20} /></button>
                    <span className='flexCenter ' >  </span>

                </div>

                <div className={cardOpen ? "overlay" : "nonoverlay"} ></div>
                <div className={cardOpen ? "cartItem" : "cardhide"} ></div>
                <div className='title flex' >




                </div>
            </div>





            {/* <button className='bg-black text-white hidden md:flex items-center
            py-2 rounded-full ' >
                <BsFillCartFill size={20} className='mr-2' /> Cart
            </button> */}

            {/* mobile Menu */}

            {/* Overlay */}
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0' ></div> : ''}

            {/* Side drawer Menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 ' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 '} >

                <AiOutlineClose onClick={() => setNav(!nav)}
                    size={30} className='absolute right-4 top-4
                cursor-pointer ' />
                <h2 className='text-2xl p-4' > <span
                    className='font-bold' >MENÜ</span></h2>

                <nav>
                    <ul className='flex flex-col p-4 text-gray-800' >
                        <li className='text-xl py-4 flex' >
                            <TbTruckDelivery size={25} className='mr-4' />Siparişler</li>
                        <li className='text-xl py-4 flex' >
                            <MdFavorite size={25} className='mr-4' />Favoriler</li>
                        <li className='text-xl py-4 flex' >
                            <FaWallet size={25} className='mr-4' />Cüzdan</li>
                        <li className='text-xl py-4 flex' >
                            <BsFillSaveFill size={25} className='mr-4' />En Çok Satanlar</li>
                        <li className='text-xl py-4 flex' >
                            <BsFillGiftFill size={25} className='mr-4' />Promosyonlar</li>
                        <li className='text-xl py-4 flex' >
                            <AiFillTag size={25} className='mr-4' />İndirim kodları</li>
                        <li className='text-xl py-4 flex' >
                            <MdHelp size={25} className='mr-4' />Yardım</li>

                    </ul>
                </nav>

            </div>

            {/* right cart items */}

            <div className={cardOpen ? 'fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300 ' : 'fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300 '} >

                {/* <BiShoppingBag onClick={() => setCardOpen(!cardOpen)}
                    size={30} className='absolute left-4 top-4
                card ' /> */}


                 


{/* denemeeeee */}
                {/* <Link to={'/cart'} className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">Sepete Git
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link> */}



                
                <div className='title flex' >
                    <h2 className='text-2xl p-4' > <span className='font-bold'>ALIŞVERİŞ SEPETİ</span></h2>

                    <AiOutlineClose onClick={closeCard} size={20} className='absolute right-4 top-4 cursor-pointer ' />

                    {/* <cardOpen>
                        
                    <ul className='flex flex-col p-4 text-gray-800' >
                        <li className='text-xl py-4 flex' >
                             <TbTruckDelivery size={25} className='mr-4'  />{data.name}</li> 
                     </ul>
                    </cardOpen> */}
                    
                    

                </div>

                {/* <div className='checkOut'>
                    <button className='bottom-0'>
                        <span  >Priceed To Checkout</span>
                        {/* <label htmlFor=''>${200}</label> 
                    </button>
                </div> 
*/}

            </div>


        </div>
    )
}

export default Navbar