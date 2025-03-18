import React from "react";
import washingImage from "../assets/e9a6fd888b53e0b988cb1ad21cf54cc0.jpg";
import beforeWashImage1 from "../assets/IMG-20250316-WA0334.jpg";
import afterWashImage1 from "../assets/IMG-20250316-WA0335.jpg";
import beforeWashImage2 from "../assets/IMG-20250316-WA0336.jpg";
import afterWashImage2 from "../assets/IMG-20250316-WA0337.jpg";
import beforeWashImage3 from "../assets/IMG-20250316-WA0338.jpg";
import afterWashImage3 from "../assets/IMG-20250316-WA0340.jpg";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="h-screen flex items-center justify-center bg-amber-300 px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-10">
          {/* Left Section - Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold text-black leading-tight">
              B.D.R Washing Center
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-black mt-2">
              Drive Clean, Shine Bright!
            </h1>
            <p className="text-xl md:text-2xl font-medium text-black mt-4">
              Experience the best car washing services with our state-of-the-art facilities and expert technicians.
            </p>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={washingImage}
              alt="Washing Center"
              className="w-full md:w-4/5 h-96 object-cover rounded-lg shadow-2xl transition-transform transform hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-black text-center py-10 px-6 md:px-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white">Why Choose Us?</h2>
        <ul className="list-disc text-2xl md:text-3xl text-amber-300 font-medium mt-6 ml-6 md:ml-10 space-y-3 text-left max-w-4xl mx-auto">
          <li>Best Quality Services</li>
          <li>Most Affordable Prices</li>
          <li>Authorized Products</li>
          <li>Experienced Workers</li>
        </ul>
      </div>

      {/* Before & After Section */}
      <div className="bg-amber-300 text-center py-10 px-6">
        <h2 className="text-4xl font-bold text-black mb-8">See the Difference!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[{ before: beforeWashImage1, after: afterWashImage1 },
            { before: beforeWashImage2, after: afterWashImage2 },
            { before: beforeWashImage3, after: afterWashImage3 }].map((pair, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-black mb-2">Before Wash</h3>
              <img src={pair.before} alt="Before Wash" className="w-80 h-96 rounded-lg shadow-lg transition-transform transform hover:scale-105" />
              <h3 className="text-2xl font-bold text-black mt-4 mb-2">After Wash</h3>
              <img src={pair.after} alt="After Wash" className="w-80 h-96 rounded-lg shadow-lg transition-transform transform hover:scale-105" />
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-black text-white text-center p-10">
        <h2 className="text-4xl font-bold mb-4">Get Started Today!</h2>
       
      </div>
    </>
  );
};

export default Home;