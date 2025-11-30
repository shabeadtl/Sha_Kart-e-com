"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

export default function WishlistPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setItems(stored);
  }, []);

  const removeFromWishlist = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    toast("Removed from wishlist 💔");
  };

  if (items.length === 0) {
    return (
      <div className="mt-28 text-center">
        <h2 className="text-2xl font-semibold mb-2">My Wishlist</h2>
        <p className="text-gray-500">Your wishlist is empty.</p>
      </div>
    );
  }

  return (
    <div className="mt-28 px-4">
      <h2 className="text-2xl font-semibold mb-4">My Wishlist 💖</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((p) => (
          <div
            key={p.id}
            className="border rounded-xl p-4 shadow bg-white flex flex-col"
          >
            <div className="w-full h-48 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                width={200}
                height={200}
                className="object-contain h-full p-3"
              />
            </div>

            <h3 className="mt-3 text-sm font-semibold line-clamp-2">
              {p.title}
            </h3>

            <p className="mt-1 text-teal-700 font-bold">₹{p.price}</p>

            <div className="mt-auto flex gap-2 pt-3">
              <Link href={`/products/${p.id}`} className="flex-1">
                <button className="w-full bg-pink-600 text-white py-2 text-sm rounded-md hover:bg-green-600 transition">
                  View
                </button>
              </Link>

              <button
                onClick={() => removeFromWishlist(p.id)}
                className="px-3 py-2 border rounded-md text-xs hover:bg-gray-100"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
