"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch product
  useEffect(() => {
    if (!id) return;

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [id]);

  // Add to cart (localstorage version)
  const addToCart = (product) => {
    const oldCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updated = [...oldCart, { ...product, qty: 1 }];
    localStorage.setItem("cart", JSON.stringify(updated));
    toast.success("Added to Cart 🛒");
  };

  const addToWishlist = (product) => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = stored.some((item) => item.id === product.id);

    if (exists) {
      toast("Already in wishlist ❤️");
      return;
    }

    const updated = [...stored, product];
    localStorage.setItem("wishlist", JSON.stringify(updated));
    toast.success("Added to wishlist 💖");
  };

  if (loading)
    return <p className="text-center mt-50 text-gray-500 fw-bold">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 mt-25 bg-white rounded-xl shadow">

      {/* Product Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div className="flex justify-center items-center hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
          <Image
            src={product.image}
            width={350}
            height={350}
            alt={product.title}
            className="object-contain rounded-lg border p-4 bg-gray-50"
          />
        </div>

        {/* DETAILS */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>

          <p className="text-gray-500 mt-3 leading-relaxed">
            {product.description}
          </p>

          <p className="text-3xl font-bold text-teal-700 mt-4">₹{product.price}</p>

          <p className="mt-2 text-yellow-500 text-lg">
            {"★".repeat(Math.round(product.rating.rate))}
            {"☆".repeat(5 - Math.round(product.rating.rate))}
            <span className="text-gray-600 ml-2">({product.rating.rate})</span>
          </p>

          {/* Add to cart button */}
          <button
            onClick={() => addToCart(product)}
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-md 
                       hover:bg-green-700 transition shadow-md font-semibold"
          >
            Add to Cart 🛒
          </button>

          <button
            onClick={() => addToWishlist(product)}
            className="mt-6 bg-red-500 text-white px-6 py-3 rounded-md 
                       hover:bg-red-700 transition shadow-md font-semibold ms-6"
          >
            ♡ Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
