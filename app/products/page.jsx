"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductList() {
  const [list, setList] = useState([]);
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("idle");

  // ⭐ Fetch products
  useEffect(() => {
    if (status === "idle") {
      setStatus("loading");

      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setList(data);
          setStatus("done");
        })
        .catch(() => setStatus("error"));
    }
  }, [status]);

  // ⭐ Rating stars function
  const ratingStars = (rate) => {
    let stars = "";
    for (let i = 0; i < 5; i++) {
      stars += i < Math.round(rate) ? "★" : "☆";
    }
    return stars;
  };

  // ⭐ Filtered list
  const filtered =
    category === "all"
      ? list
      : list.filter((p) => p.category === category);

  return (
    <div className="mt-28 px-4">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-4 text-teal-700">
        Recommended Products
      </h2>

      {/* Category Dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded-md mb-6"
      >
        <option value="all">All</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women&apos;s Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filtered.map((p) => (
          <div
            key={p.id}
            className="rounded-xl shadow-md bg-gradient-to-r from-[#e4edefff] to-[#f3f3f3ff] p-3 flex flex-col"
          >
            {/* Image */}
            <div className="w-full h-52 flex items-center justify-center bg-white rounded-lg overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                width={200}
                height={200}
                className="object-contain h-full p-3 hover:scale-105 transition-transform"
              />
            </div>

            <div className="mt-3 flex flex-col flex-grow">

              {/* Other pattern */}
              <a className="text-blue-600 text-xs" href="/">
                Other color/patterns
              </a>

              {/* Sponsored */}
              <div className="text-gray-500 text-xs mt-1">Sponsored 🌐</div>

              {/* Title */}
              <h5 className="text-md font-semibold mt-2 line-clamp-1">
                {p.title}
              </h5>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-2 overflow-auto max-h-20">
                {p.description}
              </p>

              {/* Rating */}
              <div className="text-yellow-500 font-bold mt-2">
                {ratingStars(p.rating.rate)}{" "}
                <span className="text-gray-600 text-sm">
                  ({p.rating.rate})
                </span>
              </div>

              {/* Big Billion Day */}
              <div
                className="p-1 text-white font-bold mt-2 text-center text-xs rounded"
                style={{
                  background:
                    "linear-gradient(to right, #b5b5b5ff, #5d5d5dff)",
                    color:"black"
                }}
              >
                BLACK FRIDAY's SALE!!
              </div>

              {/* Price */}
              <span className="font-bold text-xl mt-2">
                ₹ {p.price}
              </span>

              {/* Button */}
              <Link
                href={`/products/${p.id}`}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-center text-sm font-bold transition"
              >
                View More
              </Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
