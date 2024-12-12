import React from 'react'

 const Home = () => {
  return (
    <>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"50px"}}>
         <img
    src={require("../images/face.png")}
    alt="Logo"
    width="300"
    height="150"
    class="d-inline-block align-text-top"
  ></img>
  </div>
  <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px"}}>
      <p style={{ fontWeight: "bold" }}>Melbin sunny</p>
      
  </div>
  <p style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus commodi magnam recusandae ipsum ea voluptates aspe
      </p>
  </>
  )
}
export default Home
