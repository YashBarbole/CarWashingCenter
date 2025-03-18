import React from "react";
import standardWashImage from "../assets/standard-wash.avif";
import interiorCleaningImage from "../assets/interior-cleaning.jpeg";
import waxPolishImage from "../assets/wax-polish.avif";

const Services = () => {
  return (
    <div className="text-center bg-amber-300 py-20 px-6">
      <h2 className="text-5xl font-bold text-black mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        
        {/* Service Cards */}
        {[{
          title: "Standard Car Wash",
          image: standardWashImage,
          description: "Our standard car wash includes a thorough exterior cleaning with soap and water, followed by a rinse and dry."
        }, {
          title: "Interior Cleaning",
          image: interiorCleaningImage,
          description: "Our interior cleaning service includes vacuuming, wiping down surfaces, and sanitizing high-touch areas."
        }, {
          title: "Wax and Polish",
          image: waxPolishImage,
          description: "Protect your car's paint with our premium wax and polish service, enhancing its shine and durability."
        }].map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <h3 className="text-3xl font-bold text-black mb-4">{service.title}</h3>
            <img src={service.image} alt={service.title} className="w-full h-72 object-cover rounded-lg mb-4" />
            <p className="text-lg font-medium text-black">{service.description}</p>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Services;
