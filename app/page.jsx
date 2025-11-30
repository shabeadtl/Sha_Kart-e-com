"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HomePage() {

  // AUTO CAROUSEL
  const slides = [
    "/assets/carousel1.webp",
    "/assets/carousel2.webp",
    "/assets/carousel3.webp",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-24">

      {/* ================= CAROUSEL ================= */}
      <div className="w-full h-[260px] sm:h-[380px] md:h-[300px] overflow-hidden rounded-lg shadow">

        <Image
          src={slides[current]}
          width={1600}
          height={500}
          alt="carousel"
          className="w-full h-full object-cover transition-all duration-300"
        />
      </div>

      {/* =================== TOP DEALS =================== */}
      <section className="w-full mt-10 bg-white p-6 rounded-xl shadow">
  <h2 className="text-xl font-bold mb-5">Top Deals</h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-6 text-center">

    {/* Fans & Geysers */}
    <div className="p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.1] cursor-pointer">
      <Image
        src="/assets/product2/fans&gey.webp"
        width={120}
        height={120}
        alt="Fans & Geysers"
        className="mx-auto object-contain h-[120px] w-[120px]"
      />
      <p className="mt-2 text-sm">Fans & Geysers</p>
      <b className="text-sm">From ₹999</b>
    </div>

    {/* Home Essentials */}
    <div className="p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.1] cursor-pointer">
      <Image
        src="/assets/product2/home.webp"
        width={120}
        height={120}
        alt="Home Essentials"
        className="mx-auto object-contain h-[120px] w-[120px]"
      />
      <p className="mt-2 text-sm">Home Essentials</p>
      <b className="text-sm">Shop Now!</b>
    </div>

    {/* Projector */}
    <div className="p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.1] cursor-pointer">
      <Image
        src="/assets/product2/projector.webp"
        width={120}
        height={120}
        alt="Projector"
        className="mx-auto object-contain h-[120px] w-[120px]"
      />
      <p className="mt-2 text-sm">Projector</p>
      <b className="text-sm">From ₹6990</b>
    </div>

    {/* Speaker (fixed) */}
    <div className="p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.1] cursor-pointer">
      <Image
        src="/assets/product2/spkr.webp"
        width={120}
        height={120}
        alt="Best Selling Mobile Speakers"
        className="mx-auto object-contain h-[120px] w-[120px]"
      />
      <p className="mt-2 text-sm">Best Selling Mobile Speakers</p>
      <b className="text-sm">From ₹499</b>
    </div>

    {/* Monitors */}
   <div className="p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.1] cursor-pointer">
      <Image
        src="/assets/product2/monitors.webp"
        width={120}
        height={120}
        alt="Monitors"
        className="mx-auto object-contain h-[120px] w-[120px]"
      />
      <p className="mt-2 text-sm">Monitors</p>
      <b className="text-sm">From ₹6599</b>
    </div>

    {/* Smartwatch */}
    <div className="p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.1] cursor-pointer">
      <Image
        src="/assets/product2/smartwatch.webp"
        width={120}
        height={120}
        alt="Smartwatch"
        className="mx-auto object-contain h-[120px] w-[120px]"
      />
      <p className="mt-2 text-sm">Fastrack Smartwatch</p>
      <b className="text-sm">From ₹1399</b>
    </div>

    {/* Ad Box */}
    <div>
      <Image
        src="/assets/Your ad.gif"
        width={200}
        height={200}
        alt="Ad"
        className="mx-auto rounded-lg border p-2 bg-gray-100 object-contain h-[150px] w-[150px]"
      />
    </div>

  </div>
</section>


      {/* ================= MOBILE DEALS =============== */}
      <section className="w-full mt-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-5">Mobiles</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-6 text-center">

          {/* Ad */}
          <div>
            <Image src="/assets/Your ad.gif" width={150} height={150} alt="Ad" className="mx-auto rounded bg-gray-200 p-2" />
          </div>

          {/* Samsung */}
          <div className="p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
            <Image src="/assets/product2/smsng galaxy s25.webp" width={120} height={120} alt="Samsung" className="mx-auto" />
            <p className="mt-2 text-sm">Samsung Galaxy S25</p>
            <b className="text-sm">₹68,999</b>
          </div>

          {/* Pixel */}
          <div className="p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
            <Image src="/assets/product2/google pixel 9.webp" width={120} height={120} alt="Pixel" className="mx-auto" />
            <p className="mt-2 text-sm">Google Pixel 9</p>
            <b className="text-sm">₹62,999</b>
          </div>

          {/* Nothing */}
          <div className="p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
            <Image src="/assets/product2/nothing phone 3a.webp" width={120} height={120} alt="Nothing" className="mx-auto" />
            <p className="mt-2 text-sm">Nothing Phone 3a</p>
            <b className="text-sm">₹22,999</b>
          </div>

          {/* Oppo */}
          <div className="p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
            <Image src="/assets/product2/oppo k13x 5g.webp" width={120} height={120} alt="Oppo" className="mx-auto" />
            <p className="mt-2 text-sm">Oppo K13x 5G</p>
            <b className="text-sm">₹10,749</b>
          </div>

          {/* Realme */}
          <div className="p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
            <Image src="/assets/product2/realme  p3x 5g.webp" width={120} height={120} alt="Realme" className="mx-auto" />
            <p className="mt-2 text-sm">Realme P3x 5G</p>
            <b className="text-sm">₹12,499</b>
          </div>

          {/* Vivo */}
          <div className="p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
            <Image src="/assets/product2/vivo.webp" width={120} height={120} alt="Vivo" className="mx-auto" />
            <p className="mt-2 text-sm">Vivo T4 Lite 5G</p>
            <b className="text-sm">₹9,999</b>
          </div>

        </div>
      </section>

      {/* ================= PROMOS ================= */}
      <section className="w-full mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-2">

        <div className="rounded-lg overflow-hidden shadow p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
          <Image src="/assets/product2/promo1.webp" width={600} height={350} alt="Promo1" className="w-full object-cover" />
        </div>

        <div className="p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer rounded-lg overflow-hidden shadow">
          <Image src="/assets/product2/promo2.webp" width={600} height={350} alt="Promo2" className="w-full object-cover" />
        </div>

        <div className="p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer rounded-lg overflow-hidden shadow">
          <Image src="/assets/product2/promo3.webp" width={600} height={350} alt="Promo3" className="w-full object-cover" />
        </div>

      </section>

      {/* ================= IPHONE DEALS ================= */}
      <section className="w-full mt-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-5">iPhone Deals!</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-6 text-center">

          {/* iPhone 17 Pro */}
          <div className="p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
            <Image src="/assets/iphone/17pro.webp" width={120} height={120} alt="iPhone 17 Pro" className="mx-auto" />
            <p className="mt-2 text-sm">iPhone 17 Pro</p>
            <b className="text-sm">₹1,34,900</b>
          </div>

          {/* iPhone 16 Pro */}
          <div className="p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
            <Image src="/assets/iphone/16pro.webp" width={120} height={120} alt="iPhone 16 Pro" className="mx-auto" />
            <p className="mt-2 text-sm">iPhone 16 Pro</p>
            <b className="text-sm">₹1,09,999</b>
          </div>

          {/* iPhone 15 Pro */}
          <div className="p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
            <Image src="/assets/iphone/15pro.webp" width={120} height={120} alt="iPhone 15 Pro" className="mx-auto" />
            <p className="mt-2 text-sm">iPhone 15 Pro</p>
            <b className="text-sm">₹94,999</b>
          </div>

          {/* iPhone 14 Pro */}
          <div className="p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
            <Image src="/assets/iphone/14pro.webp" width={120} height={120} alt="iPhone 14 Pro" className="mx-auto" />
            <p className="mt-2 text-sm">iPhone 14 Pro</p>
            <b className="text-sm">₹1,29,900</b>
          </div>

          {/* iPhone 13 Pro */}
          <div className="p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
            <Image src="/assets/iphone/13pro.webp" width={120} height={120} alt="iPhone 13 Pro" className="mx-auto" />
            <p className="mt-2 text-sm">iPhone 13 Pro</p>
            <b className="text-sm">₹1,69,900</b>
          </div>

          {/* iPhone 12 Pro */}
          <div className="p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
            <Image src="/assets/iphone/12pro.webp" width={120} height={120} alt="iPhone 12 Pro" className="mx-auto" />
            <p className="mt-2 text-sm">iPhone 12 Pro</p>
            <b className="text-sm">₹1,19,900</b>
          </div>

          {/* iPhone 11 Pro */}
          <div className="p-4 rounded-lg shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
            <Image src="/assets/iphone/11pro.webp" width={120} height={120} alt="iPhone 11 Pro" className="mx-auto" />
            <p className="mt-2 text-sm">iPhone 11 Pro</p>
            <b className="text-sm">₹1,40,000</b>
          </div>

        </div>
      </section>

    </div>
  );
}
