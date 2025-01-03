import React, { useContext } from 'react'
import { sidebarContext } from '../App'

export default function About() {

  const {setHs} =useContext(sidebarContext)

  setHs(1)

  return (
    <div className='about text-center pt-20 w-[84%] 3xl:w-[100%]'>
      <h1>ABOUT PAGE</h1>
    </div>
  )
}
