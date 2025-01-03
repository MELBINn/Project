// src/pages/Contact.js

import React from 'react';

const Contact = () => {
  return (
    <div className="mt-[10%] ml-[10%] text-gray-800 font-sans py-12">
      <section className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>

        <div className="space-y-4">
          {/* Company Name */}
          <div>
            <h2 className="text-lg font-medium text-gray-700">Company Name:</h2>
            
          </div>

          {/* Email */}
          <div>
            <h2 className="text-lg font-medium text-gray-700">Email:</h2>
            <p className="text-gray-800">company@example.com</p>
          </div>

          {/* Phone Number */}
          <div>
            <h2 className="text-lg font-medium text-gray-700">Phone Number:</h2>
            <p className="text-gray-800">123456788</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
