export default function ContactPage() {
  return (
    <div className="mt-32 max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>

      <p className="text-center text-gray-500 mb-6">
        Got questions or feedback? We’d love to hear from you!  
        Fill out the form below and we’ll get back to you soon.
      </p>

      <form className="space-y-4">

        {/* Full Name */}
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email address</label>
          <input
            type="email"
            placeholder="name@example.com"
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-600 resize-none"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>

      </form>
    </div>
  );
}
