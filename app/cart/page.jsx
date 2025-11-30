'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image'; 

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('cart')) || [];
      setCart(stored);
    } catch (error) {
      console.error('Error loading cart:', error);
    }
  }, []);

  return (
    <main className="p-6 mt-20">
      <h1 className="text-3xl font-bold text-teal-700 mb-6">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Cart is empty</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="border rounded-xl p-4 shadow hover:shadow-lg transition flex flex-col items-center"
              >
                {/* ✅ Image Display */}
                <Image
                  src={item.image}
                  alt={item.title}
                  width={110}
                  height={110}
                  className="object-contain mb-3"
                />

                <h2 className="text-lg font-semibold text-center">
                  {item.title}
                </h2>
                <p className="text-teal-600 font-bold mt-2">₹{item.price}</p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-md shadow-md hover:shadow-lg transition-all">
                  Buy Now
                </button>

              </div>
            ))}
          </div>

          <button
            onClick={() => {
              localStorage.removeItem('cart');
              setCart([]);
            }}
            className="bg-red-600 text-white px-5 py-2 mt-6 rounded hover:bg-red-700"
          >
            Clear Cart
          </button>
        </>
      )}
    </main>
  );
}
