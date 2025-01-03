import React, { useEffect, useState } from "react";
const Home = () =>{
    return (
        <div className="flex h-screen">
    
      <div className="w-[16%] bg-gray-800 text-white p-4">
        Sidebar Content
      </div>
    
      <div className="w-[84%] bg-gray-100 p-4">
        Main Content
      </div>
    </div>
    
      );
}

export default Home