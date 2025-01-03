import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import axios from "axios";




const Productdetail = () => {
 
  const {id,name} = useParams()
  // const product=products.find((item)=>item.id===parseInt(id))
  const[product,setProduct]=useState({})
   const [loading, setLoading] = useState([false]);

  
  
      useEffect(()=>{
        async function fetchData(){
          try{
            setLoading(true);
            const res=await axios.get(`https://fakestoreapi.com/products/${id}`,{
              headers:{
                'Content-Type':'application/json',
              }
            })
  
            if (res.status===200){
              console.log(res.data)
              setProduct(res.data)
              setLoading(false);

            }
            else{
              console.error("Data not found")
              setLoading(false);

  
            }
          }
          catch(error){
            console.error(error)

  
          }
        }
  
        fetchData()
      },[id])

      if (loading) {
        return (
          <h1 className="text-center ml-[10%] font-bold pt-[240px] w-[84%] 3xl:w-[100%]">
            Loading...
          </h1>
        );
      }
  return (
    <>
   <div className='ml-[15%] mt-[10%] mb-[10%] mr-[10%] flex flex-col md:flex-row p-6 rouded-lg shadow-lg gap-6'>
    <div className='flex-1 flex items-center justify-center'>
    <img className='max-w-full h-[400px] rounded-lg shadow-md  bg-slate-500' src={product.image} alt={product.title} />
    </div>
    <div className='flex-1 flex flex-col justify-between'>
      <div>
        <h1 className='text-2xl font-bold text-gray-800 mb-4'>{product.title}</h1>
        <p className='text-gray-600 mb-4'>{product.description}</p>
        <div className='mb-4'>
          <span className='text-3xl font-bold text-green-600'>Price:{product.price}</span>
        </div>
      </div>
      <div className='flex gap-4 mt-4'>
        <button className='flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700'>Buy Now</button>
        <button className='flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-blue-700'>Add to cart</button>
      </div>
    </div>
   </div>

    
   
      </>
  )
}

export default Productdetail
{/* <div className='products ml-[20%] mt-5  bg-white rounded-lg text-center pt-5 w-[64%]  3xl:w-[100%] '>
<h1 className='font-extrabold text-gray-800 mb-4'> {name}</h1>
<img className='m-auto h-[280px]' src={product.image} alt={product.title} />
<h1 className='mt-2 font-semibold text-gray-800'>{product.title}</h1>
<h2 className=' mt-2 font-semibold text-gray-800'>PRICE:{product.price}</h2>
<p className="mt-2 text-lg text-gray-800 text-center">Description:{product.description}
    </p>
      
    </div> */}