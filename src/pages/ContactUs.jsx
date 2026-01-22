import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS sendForm
    emailjs

      .sendForm(
        "service_e5uvnp2", // ✅ Service ID

        "template_a46rbz8", // ✅ Template ID

        form.current,

        "To-yYyvKA8hq0wg4y", // ✅ Public Key
      )
      .then(
        () => {
          toast.success("Message sent successfully ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          // Reset form fields
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast.error("Failed to send message ❌", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.log(error.text);
        },
      );
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-bold text-blue-400 mb-6 mt-10">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Info Section */}
        <div className="bg-gray-650 border border-blue-900 rounded-xl p-6">
          <p className="text-gray-550 leading-relaxed">
            For project inquiries, collaboration, or academic discussion, please
            contact us using the form.
          </p>
          <br />
          <p className="text-gray-550 leading-relaxed">
            Email: phyomyatmin646@gmail.com
            <br />
            +95 94555 070 81
            <br />
            University: Technological University (TTU)
          </p>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="bg-gray-650 border border-blue-900 rounded-xl p-6 space-y-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-900 border border-blue-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-900 border border-blue-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
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

      <ToastContainer />
    </div>
  );
}
