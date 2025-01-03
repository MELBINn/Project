import React,{useEffect,useState} from 'react'

import { useParams } from 'react-router-dom'

import { useContext } from "react"
import { sidebarContext } from "../App"

import axios from 'axios';

// import { products } from './product'

export default function Productdetail() {

  const {setHs} =useContext(sidebarContext)
  
    setHs(3)

    const {id}=useParams()

    const[product,setProduct]=useState({})

  
  
      useEffect(()=>{
        async function fetchData(){
          try{
            const res=await axios.get(`https://fakestoreapi.com/products/${id}`,{
              headers:{
                'Content-Type':'application/json',
              }
            })
  
            if (res.status===200){
              setProduct(res.data)

            }
            else{
              console.error("Data not found")

  
            }
          }
          catch(error){
            console.error(error)

  
          }
        }
  
        fetchData()
      },[id])

  return (
    <div className='products text-center pt-20 w-[84%] 3xl:w-[100%]'>
      <img className='m-auto' src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <h2>{product.price}</h2>
    </div>
  )
}
