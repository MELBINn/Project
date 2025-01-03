import React, { useContext, useState } from 'react'
import { sidebarContext } from '../App'


export default function Header() {


  const [toggle,setToggle]=useState(false)

  const {hs}=useContext(sidebarContext)

  


  return (
    <div className="header ">
      <header className="flex justify-between items-center bg-gradient-to-r h-[80px]
      5xl:h-[60px] px-4 from-black via-blue-400 to-black fixed top-0 left-0 right-0 z-10 ">
        <div className="left">
          <h1 className="w-[8%] 5xl:w-[10%]" ><a className="block w-[100%]" href="/"><img className="block w-[100%]"  alt="logo" /></a></h1>
        </div>
        {/* src={require('../images/rb_2506.png')} */}
        <div className="right flex justify-end items-center  ">
          <div className=" res hidden">
            <a href="/">Home</a>
            <a href="/">Contact</a>
            <a href="/">About</a>
          </div>
          <div className="hidden 3xl:block">
            <img onClick={()=>{setToggle(!toggle)}} className="block bg-white p-2 rounded-md w-[16%] 3xl:w-[20%] float-right"  alt="logo" />
          </div>
          {/* src={require('../images/toggle.svg').default} */}
        </div>
      </header>
      <div className={toggle?"sidebar":"sidebar 3xl:hidden"}>
        <a href="/" className={hs===0?'current':'nc'}>Home</a>
        <a href="/about" className={hs===1?'current':'nc'}>About</a>
        <a href="/contact" className={hs===2?'current':'nc'}>Contact</a>
        <a href="/products" className={hs===3?'current':'nc'}>Products</a>
        <a href="/" className={hs===4?'current':'nc'}>Logout</a>
      </div>
    </div>
  )
}