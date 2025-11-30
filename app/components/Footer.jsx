"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B1221] text-white px-6 py-10 mt-10">
      
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">

        {/* ABOUT */}
        <div>
          <h5 className="font-semibold mb-3">ABOUT</h5>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Sha_kart Stories</li>
            <li>Press</li>
          </ul>
        </div>

        {/* GROUP COMPANIES */}
        <div>
          <h5 className="font-semibold mb-3">GROUP COMPANIES</h5>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Flipkart</li>
            <li>Amazon</li>
            <li>Ali Express</li>
            <li>sha.in</li>
          </ul>
        </div>

        {/* HELP */}
        <div>
          <h5 className="font-semibold mb-3">HELP</h5>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Return</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* CONSUMER POLICY */}
        <div className="md:border-r md:border-gray-600 md:pr-4">
          <h5 className="font-semibold mb-3">CONSUMER POLICY</h5>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Cancellation & Return</li>
            <li>Terms of Use</li>
            <li>Security</li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* ADDRESS */}
        <div>
          <h5 className="font-semibold mb-3">Registered Address</h5>
          <p className="text-sm text-gray-300 leading-relaxed">
            Randathani (PO),<br />
            Malappuram (Dist), Kerala, India<br />
            GPIN: MC9-MLF-LFJ5
          </p>

          <div className="mt-3 flex justify-center md:justify-start">
            <Image
              src="/assets/sha_kart_logo.png"
              width={120}
              height={120}
              alt="Sha Kart Logo"
            />
          </div>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="text-center text-gray-400 text-xs mt-10">
        ©️ 2002 - 2025 Sha_kart.com
      </div>

    </footer>
  );
}
