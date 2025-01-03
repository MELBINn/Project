import React,{useEffect,useState} from 'react'

import { useContext } from "react"
import { sidebarContext } from "../App"

import axios from 'axios';


// import { products } from './product'

export default function Products() {

  const {setHs} =useContext(sidebarContext)
  
    setHs(3)
  
  const[products,setProducts]=useState([])

  const[loading,setLoading]=useState(false)


    useEffect(()=>{
      async function fetchData(){
        try{
          setLoading(true)
          const res=await axios.get("https://fakestoreapi.com/products",{
            headers:{
              'Content-Type':'application/json',
            }
          })

          if (res.status===200){
            setProducts(res.data)
            setLoading(false)
          }
          else{
            console.error("Data not found")
            setLoading(false)

          }
        }
        catch(error){
          console.error(error)
          setLoading(false)

        }
      }

      fetchData()
    },[])

  if(loading){
    return(
      <h1 className="text-center pt-[240px] w-[84%] 3xl:w-[100%]">Loading...</h1>
    )
  }
  return (
    <div className='products text-center pt-20 w-[84%] 3xl:w-[100%]'>
      <h1>Product Page</h1>
      <div className='flex items-center justify-evenly flex-wrap'>
        {products.map((item)=>{
            return(
                <a className='bg-white p-2 block w-[22%] rounded-lg mb-8 hover:shadow-xl hover:-mt-4' key={item.id} href={`/pd/${item.id}`}>
                    <img className='m-auto w-[120px]' src={item.image} alt={item.title} />
                    <h1 className="text-[16px] mt-3">{item.title}</h1>
                </a>
            )
        })}
      </div>
    </div>
  )
}
