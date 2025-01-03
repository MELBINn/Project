import React, { useEffect } from "react";
import Product from "../images/task-4-1.jpg";
import { Link } from "react-router-dom";
import { products } from "../Components/Products";
import { useState } from "react";
import axios from "axios";

const Users = ({ hs, setHs }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([false]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await axios.get("https://fakestoreapi.com/products", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status === 200) {
          setProducts(res.data);
          setLoading(false);
        } else {
          console.log("not found");
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  console.log(products);

  if (loading) {
    return (
      <h1 className="text-center z-0 font-bold pt-[240px]  ml-0 md:ml-[10%]">
        Loading...
      </h1>
    );
  }
  return (
    <>
   <div className=" ml-[8%]  pt-20 ">
  <h1 className="mb-5 mt-5 flex justify-center items-center font-extrabold text-sky-800 text-lg ml-[3%]">
    PRODUCTS
  </h1>

  <div className="grid gap-4 mx-auto w-[74%] md:w-[80%] lg:w-[90%] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {products.map((item) => {
      return (
        <Link
          className={`bg-white p-2 rounded-lg hover:shadow-xl ${
            hs === 1 ? "border-2 border-blue-500" : ""
          }`}
          key={item.id}
          to={`/pd/${item.id}/${item.title}`}
          onClick={() => setHs(1)} // Set hs to 1 for "Users"
        >
          <div className="flex flex-col items-center justify-center w-full max-w-[90%] mx-auto">
            <div className="xs:h-[500px] w-full">
              <img
                className="m-auto flex items-center justify-center h-full w-full object-contain sm:max-h-[150px] xs:max-h-[100px]"
                src={item.image}
                alt={item.title}
              />
            </div>
            <h1 className="mt-4 text-center text-lg sm:text-sm xs:text-xs break-words">
              {window.innerWidth < 630
                ? item.title.split(" ").slice(0, 3).join(" ")
                : item.title}
            </h1>
          </div>
        </Link>
      );
    })}
  </div>
</div>


    </>
  );
};

export default Users;

{

{/* <div className="pt-20 mx-auto w-[74%] md:w-[80%] lg:w-[90%]">
  <h1 className="mb-5 mt-5 font-extrabold text-sky-800 text-lg ml-[3%]">
    PRODUCTS
  </h1>

  <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {products.map((item) => {
      return (
        <Link
          className={`bg-white p-2 rounded-lg hover:shadow-xl ${
            hs === 1 ? "border-2 border-blue-500" : ""
          }`}
          key={item.id}
          to={`/pd/${item.id}/${item.title}`}
          onClick={() => setHs(1)} // Set hs to 1 for "Users"
        >
          <div className="flex flex-col items-center justify-center w-full max-w-[90%] mx-auto">
            <div className="xs:h-[500px] w-full">
              <img
                className="m-auto flex items-center justify-center h-full w-full object-contain sm:max-h-[150px] xs:max-h-[100px]"
                src={item.image}
                alt={item.title}
              />
            </div>
            <h1 className="mt-4 text-center text-lg sm:text-sm xs:text-xs break-words">
              {window.innerWidth < 630
                ? item.title.split(" ").slice(0, 3).join(" ")
                : item.title}
            </h1>
          </div>
        </Link>
      );
    })}
  </div>
</div>
 */}




  {/* flex items-center justify-evenly flex-wrap */}
        {/* <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        
          {products.map((item) => {
            return (
              <Link
                className={`bg-white p-2 w-[23%] rounded-lg mb-8 hover:shadow-xl ${
                  hs === 1 ? "border-2 border-blue-500" : ""
                }`}
                key={item.id}
                to={`/pd/${item.id}/${item.title}`}
                onClick={() => setHs(1)} // Set hs to 1 for "Users"
              >
                
                <div className="h-[270px]  flex flex-col items-center justify-center xs:h-[500px]"> 
                <img className="m-auto  flex items-center justify-center h-full text-lg sm:max-h-[150px] xs:h-[50px] " src={item.image} alt={item.title} />
                <h1 className=" mt-4 flex items-center justify-center text-lg sm:text-xs xs:text-xs break-words">{window.innerWidth < 630 ? item.title.split(" ").slice(0, 3).join(" ") :item.title}</h1>
                </div>
            
              </Link>
            );
          })}
        </div> */}
        
  // <Link
  // //<a
  //   className="bg-white p-2  w-[45%] rounded-lg mb-8 hover:shadow-xl"
  //   key={item.id}
  //   href={`/pd/${item.id}/${item.title}`}
  //   onClick={() => setHs(1)}
  // >
  //   <img className="m-auto" src={item.image} alt={item.title} />
  //   <h1>{item.title}</h1>
  //   </Link>
  // // </a>
  /* <Link to="/product-detail" div className="max-w-xs mt-2 rounded-lg overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={Product}  />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Camera</h2>
        <p className="mt-2 text-lg text-gray-600">$23</p>
      </div>
    </Link>
     <div className="max-w-xs mt-2  rounded-lg overflow-hidden shadow-lg bg-white">
     <img className="w-full h-48 object-cover" src={Product} />
     <div className="p-4">
       <h2 className="text-xl font-semibold text-gray-800">Camera</h2>
       <p className="mt-2 text-lg text-gray-600">$23</p>
     </div>
   </div>
   <Link/> */
}
