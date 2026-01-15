export default function ContactUs() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-bold text-blue-400 mb-6">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Info */}
        <div className="bg-gray-950 border border-blue-900 rounded-xl p-6">
          <p className="text-gray-300 leading-relaxed mb-4">
            For project inquiries, collaboration, or academic discussion,
            please contact us using the form.
          </p>
          <p className="text-gray-400 text-sm">
            Email: phyomyatmin646@gmail.com <br />
            University: Technological University (TTU)
          </p>
        </div>

        {/* Form */}
        <form className="bg-gray-950 border border-blue-900 rounded-xl p-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-900 border border-blue-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-900 border border-blue-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded bg-gray-900 border border-blue-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 rounded bg-blue-600 hover:bg-blue-700 transition shadow-lg shadow-blue-900/40"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
