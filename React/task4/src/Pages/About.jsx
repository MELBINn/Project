import React from 'react'


 

const About = () => {
  return (
    <div className=" ml-[12%] mt-[10%] mr-[10%] bg-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className=" text-dark text-center py-20">
        <h1 className="text-3xl font-bold">About Us</h1>
      </section>

      {/* Main Content Section */}
      <section className="max-w-4xl mx-auto p-6">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-600">
            We are a team dedicated to providing the best services and creating innovative solutions.
          </p>
        </div>
      </section>
    </div>
  );
};


export default About;
  
