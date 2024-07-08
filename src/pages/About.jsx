import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        We are a leading electronics retailer committed to providing the best products and services to our customers.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
      <p className="mb-4">
        Our mission is to offer high-quality electronics at competitive prices while ensuring excellent customer service.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="text-center">
          <img src="/placeholder.svg" alt="Team Member" className="mx-auto object-cover w-full h-[200px] rounded-full" />
          <h3 className="text-xl font-semibold mt-2">John Doe</h3>
          <p className="text-gray-600">CEO</p>
        </div>
        <div className="text-center">
          <img src="/placeholder.svg" alt="Team Member" className="mx-auto object-cover w-full h-[200px] rounded-full" />
          <h3 className="text-xl font-semibold mt-2">Jane Smith</h3>
          <p className="text-gray-600">CTO</p>
        </div>
        <div className="text-center">
          <img src="/placeholder.svg" alt="Team Member" className="mx-auto object-cover w-full h-[200px] rounded-full" />
          <h3 className="text-xl font-semibold mt-2">Alice Johnson</h3>
          <p className="text-gray-600">CFO</p>
        </div>
        <div className="text-center">
          <img src="/placeholder.svg" alt="Team Member" className="mx-auto object-cover w-full h-[200px] rounded-full" />
          <h3 className="text-xl font-semibold mt-2">Bob Brown</h3>
          <p className="text-gray-600">COO</p>
        </div>
      </div>
    </div>
  );
};

export default About;