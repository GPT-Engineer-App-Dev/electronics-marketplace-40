import React from "react";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="hero bg-gray-200 p-8 rounded-lg mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Electronics Store</h1>
        <p className="text-lg">Find the best electronics at unbeatable prices.</p>
      </div>
      <div className="featured-products mb-8">
        <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="border p-4 rounded">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <h2 className="text-xl font-semibold mt-2">Product 1</h2>
            <p className="text-gray-600">$100</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
          </div>
          <div className="border p-4 rounded">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <h2 className="text-xl font-semibold mt-2">Product 2</h2>
            <p className="text-gray-600">$200</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
          </div>
          <div className="border p-4 rounded">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <h2 className="text-xl font-semibold mt-2">Product 3</h2>
            <p className="text-gray-600">$300</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
          </div>
          <div className="border p-4 rounded">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <h2 className="text-xl font-semibold mt-2">Product 4</h2>
            <p className="text-gray-600">$400</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="promotions bg-gray-200 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Special Offers</h2>
        <p className="text-lg">Check out our latest promotions and save big on your favorite electronics!</p>
      </div>
    </div>
  );
};

export default Index;