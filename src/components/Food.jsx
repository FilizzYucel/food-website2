import React, { useState } from 'react'
import { data } from '../data/data.js'
import { AiOutlinePlusCircle } from 'react-icons/ai';


const Food = () => {
    // console.log(data)
const [foods,setFoods] = useState(data);


//Filter type 
const filterType = (category) => {
    setFoods(
        data.filter((item)=>{
            return item.category === category;
        })
    );
};

// Filter by gram
const filterGram = (gram)=>{
    setFoods(
        data.filter((item)=> {
            return item.gram === gram;
        })
    );
};



const addToCart = (data) => {
    alert(data.name);
  };



// const ProductCart = ({ key, id, cover, name, gram }) => {
// //denem2
// const dispatch = useDispatch()
// const addToCart = () => {
//     dispatch(addToCart({ id, name, gram, cover }))
//   }
// }

    return (
        <div className='max-w-[1640px] m-auto px-4 py-12  ' >
            <h1 className='text-red-600 font-bold text-4xl text-center ' >Ürünlerimiz</h1>

            {/* Filter Row */}
            <div className=' flex flex-col lg:flex-row justify-between ' >
                {/* fİLTER TYPE */}
                <div className='font-bold text-gray-700 ' >
                    <p>Filter Type</p>
                    <div className='flex justify-between flex-wrap ' >
                        <button onClick={()=> setFoods(data)} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  ' >Tümü</button>
                        <button onClick={()=> filterType('Beyaz Peynirler')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>Beyaz Peynirler</button>
                        <button onClick={()=> filterType('Kaşar Peynirler')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>Kaşar Peynirler</button>
                        <button onClick={()=> filterType('Tost Peynirleri')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>Tost Peynirleri</button>
                        <button onClick={()=> filterType('Süzme Peynirler')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>Süzme Peynirler</button>
                        <button onClick={()=> filterType('Sürülebilir Peynirler')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>Sürülebilir Peynirler</button>
                        <button onClick={()=> filterType('Yöresel Peynirler')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>Yöresel Peynirler</button>
                        <button onClick={()=> filterType('Mozzarella')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>Mozzarella</button>
                        <button onClick={()=> filterType('Eğlenceli Peynirler')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>Eğlenceli Peynirler</button>
                        <button onClick={()=> filterType('Gurme Peynirler')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>Gurme Peynirler</button>
                        <button onClick={()=> filterType('Laktozsuz Peynirler')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>Laktozsuz Peynirler</button>
                    </div>
                </div>
                {/* Filte Grams */}
                <div>
                    <p className='font-bold text-gray-700' >Filter Grams</p>
                    <div className='flex justify-between w-full flex-wrap' >
                        <button onClick={() => filterGram('125 gr')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>125 gr</button>
                        <button onClick={() => filterGram('200 gr')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>200 gr</button>
                        <button onClick={() => filterGram('220 gr')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>220 gr</button>
                        <button onClick={() => filterGram('225 gr')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>225 gr</button>
                        <button onClick={() => filterGram('300 gr')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>300 gr</button>
                        <button onClick={() => filterGram('400 gr')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>400 gr</button>
                        <button onClick={() => filterGram('420 gr')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>420 gr</button>
                        <button onClick={() => filterGram('450 gr')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>450 gr</button>
                        <button onClick={() => filterGram('500 gr')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>500 gr</button>
                        <button onClick={() => filterGram('600 gr')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>600 gr</button>
                        <button onClick={() => filterGram('800 gr')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>800 gr</button>
                        <button onClick={() => filterGram('900 gr')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>900 gr</button>
                        <button onClick={() => filterGram('1000 gr')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>1000 gr</button>
                        <button onClick={() => filterGram('2000 gr')} className='m-1 border-red-400 text-red-600 hover:bg-red-600 hover:text-white  '>2000 gr</button>


                    </div>

                </div>

            </div>

            {/* Display foods*/}
            

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 ' >
                {foods.map((item,index)=>(
                    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300 ' >
                        <img src={item.image} alt={item.name}
                        className='w-full h-[200px] object-cover rounded-t-lg  ' />
                        <div className='flex justify-between px-2 py-4 ' >
                            <p className='font-bold' >{item.name}</p>
                            <p>
                                <button onClick={()=>addToCart(item)} className='flex items-center'>
                                    <AiOutlinePlusCircle className='mr-1'/>add </button>
                                <span className='bg-red-500 text-white p-1 rounded-full ' >{item.gram} </span>
                            </p>
                        </div>

                    </div>
                ) )}
            </div>

        </div>
    )
}

export default Food