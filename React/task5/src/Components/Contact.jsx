import { useContext } from "react"
import React from 'react'

import { sidebarContext } from "../App"

export default function Contact() {
  const {setHs} =useContext(sidebarContext)
  setHs(2)
  return (
    <div className='contact text-center pt-20 w-[84%] 3xl:w-[100%]'>
      <h1>Contact Page</h1>
    </div>
  )
}
