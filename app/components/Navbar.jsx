"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    setUser(storedUser);
    setCartCount(cartItems.length);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <nav className="fixed top-0 w-full bg-[#237850] text-white shadow z-50">
      <div className="max-w-7xl mx-auto px-3 flex items-center justify-between h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            className="hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
            src="/assets/sha_kart_logo.png"
            alt="Sha Kart"
            width={80}
            height={80}
          />
        </Link>
          <span className="text-sm hidden lg:block">
            🌎 Deliver to {user ? user.username : "----"}
          </span>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded bg-white text-black outline-none"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-5 text-sm">



          <Link href="/products" className="hover:text-yellow-300 font-bold">Products</Link>

          <Link href="/cart" className="relative hover:text-yellow-300 font-bold">
            Cart 🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <Link href="/wishlist" className="hover:text-yellow-300 font-bold">WishList</Link>

          <Link href="/about" className="hover:text-yellow-300 font-bold">About</Link>

          <Link href="/contact" className="hover:text-yellow-300 font-bold">Contact</Link>

          {/* Dropdown */}
          <div className="relative">
            <button
              className="hover:text-yellow-300 font-bold"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              User Type ▼
            </button>

            {dropdownOpen && (
              <div className="absolute bg-white text-black mt-2 right-0 w-40 rounded shadow-lg">
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 font-bold">
                  Purchase
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 font-bold">
                  Sell Products
                </button>
                <hr />
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Create Account
                </button>
              </div>
            )}
          </div>

          {/* Auth */}
          {user ? (
            <>
              <span className="hidden lg:block">Hi, {user.username}</span>
              <button
                onClick={handleLogout}
                className="px-3 py-1 border rounded hover:bg-white hover:text-black"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link
                href="/signup"
                className="px-3 py-1 bg-yellow-500 text-black rounded font-semibold"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Hamburger (Mobile Only) */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-3">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-2 py-2 rounded bg-white text-black outline-none"
        />
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-[#1f5f43] px-4 py-4 space-y-3 text-white">

          <Link href="/products" className="block">Products</Link>
          <Link href="/cart" className="block">
            Cart {cartCount > 0 && <span className="bg-red-600 px-2 py-0.5 rounded text-xs">{cartCount}</span>}
          </Link>
          <Link href="/wishlist" className="block">WishList</Link>
          <Link href="/about" className="block">About</Link>
          <Link href="/contact" className="block">Contact</Link>

          <hr className="border-white/30" />

          {/* Mobile Auth */}
          {user ? (
            <>
              <span className="block">Hi, {user.username}</span>
              <button
                onClick={handleLogout}
                className="w-full mt-2 px-3 py-2 border rounded hover:bg-white hover:text-black"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="block">Login</Link>
              <Link href="/signup" className="block bg-yellow-500 text-black px-3 py-2 rounded font-semibold mt-2">
                Sign Up
              </Link>
            </>
          )}

          <hr className="border-white/30" />

          {/* Dropdown on mobile */}
          <details className="text-white">
            <summary className="cursor-pointer">User Type</summary>
            <div className="mt-2 space-y-2 bg-white text-black p-2 rounded">
              <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 font-bold">Purchase</button>
              <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 font-bold">Sell Products</button>
              <button className="block w-full text-left px-2 py-1 hover:bg-gray-100">Create Account</button>
            </div>
          </details>
        </div>
      )}
    </nav>
  );
}
