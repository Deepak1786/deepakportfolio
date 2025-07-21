import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder action - integrate EmailJS/Firebase here
    console.log("Form Data:", form);
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-[#0f0c29] text-white py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-cyan-400"
      >
        Contact Me
      </motion.h2>

      <div className="max-w-3xl mx-auto bg-[#1e1e2f] p-8 rounded-xl border border-cyan-600">
        {submitted ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-green-400 text-xl"
          >
            ✅ Thank you! I’ll get back to you soon.
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-cyan-200">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-[#2b2d42] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-cyan-200">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-[#2b2d42] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-cyan-200">Message</label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-[#2b2d42] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="bg-cyan-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-cyan-600 transition"
            >
              Send Message
            </motion.button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;

{
  /* const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-md">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded-md"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

*/
}
