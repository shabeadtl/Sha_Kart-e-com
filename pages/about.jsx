import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="mt-28 px-4 max-w-4xl mx-auto">
      <div className="bg-white shadow-lg rounded-xl p-8">

        <h2 className="text-3xl font-bold text-center mb-6">About Sha Kart</h2>

        <div className="flex justify-center mb-8">
          <Image
            src="/assets/sha_kart_logo.png"
            alt="Sha Kart Logo"
            width={120}
            height={120}
            className="opacity-90"
          />
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          Welcome to <strong>Sha Kart</strong>, your one-stop destination for quality
          products at prices that won’t break the bank. We are more than just an online
          store – we are a brand that values trust, convenience, and the joy of
          hassle-free shopping. At <strong>Sha Kart</strong>, our mission is to provide a
          smooth, reliable, and enjoyable shopping journey with customer satisfaction as
          our top priority.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Our team is passionate about curating the latest collections across categories,
          making sure you always have access to products that fit your lifestyle. From
          everyday essentials to trending must-haves, we focus on offering a variety that
          meets the needs of every shopper. With quick delivery, secure payment options,
          and excellent customer support, we ensure your experience remains seamless from
          browsing to checkout.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          What makes us different? It’s our commitment to quality and trust. Every product
          goes through a careful selection process so that you get nothing but the best.
          Our vision is to build a community of happy customers who see
          <strong> Sha Kart </strong> not just as a store, but as a trusted shopping
          companion for years to come.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Thank you for choosing <strong>Sha Kart</strong>. We’re excited to serve you
          today, tomorrow, and always. Shop with confidence, discover new favorites, and
          enjoy the joy of online shopping at its finest. 🛒 Happy Shopping!
        </p>

      </div>
    </div>
  );
}
