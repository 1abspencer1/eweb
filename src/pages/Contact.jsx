import { motion } from "framer-motion";
motion;
const Contact = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-black py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold mb-4 text-yellow-500"
        >
          Contact Us
        </motion.h1>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          We value your time. Connect with us through our form, visit one of our
          branches, or explore our locations worldwide.
        </p>
      </section>

      {/* Contact Layout */}
      <section className="py-20 px-6 md:px-16 bg-gray-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-900 p-10 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-yellow-500 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:border-yellow-500 outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:border-yellow-500 outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:border-yellow-500 outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:border-yellow-500 outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-4 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info + Branches */}
          <div className="space-y-10">
            {/* Why Choose Us */}
            <div>
              <h2 className="text-3xl font-bold text-yellow-500 mb-6">
                Why Choose Us
              </h2>
              <div className="grid gap-6">
                {[
                  {
                    title: "Premium Support",
                    desc: "Our support team is available 24/7 to assist you professionally.",
                  },
                  {
                    title: "Trusted Worldwide",
                    desc: "We are recognized across multiple countries for excellence.",
                  },
                  {
                    title: "Strong Network",
                    desc: "Branches in key cities to serve you wherever you are.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition"
                  >
                    <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Branches */}
            <div>
              <h2 className="text-3xl font-bold text-yellow-500 mb-6">
                Our Branches
              </h2>
              <div className="grid gap-6">
                {[
                  {
                    city: "New York",
                    address: "123 Fifth Avenue, Manhattan, NY",
                    phone: "+1 (555) 123-4567",
                    hours: "Mon - Fri: 9am - 6pm",
                  },
                  {
                    city: "London",
                    address: "221B Baker Street, London, UK",
                    phone: "+44 (20) 7946-0958",
                    hours: "Mon - Sat: 10am - 7pm",
                  },
                  {
                    city: "Lagos",
                    address: "45 Allen Avenue, Ikeja, Lagos",
                    phone: "+234 (701) 234-5678",
                    hours: "Mon - Sun: 8am - 8pm",
                  },
                ].map((branch, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition"
                  >
                    <h3 className="text-xl font-semibold text-yellow-500">
                      {branch.city}
                    </h3>
                    <p className="text-gray-300">{branch.address}</p>
                    <p className="mt-2 text-gray-400">📞 {branch.phone}</p>
                    <p className="text-gray-500 text-sm">{branch.hours}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px]">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.784263141181!2d-74.00601528459478!3d40.71277597933083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjAuMCJX!5e0!3m2!1sen!2s!4v1632971109415!5m2!1sen!2s"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-0"
        ></iframe>
      </section>

      {/* Closing CTA */}
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-black py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">We’re Here for You</h2>
        <p className="max-w-xl mx-auto">
          Whether it’s a simple question or a detailed inquiry, our global team
          is always ready to help.
        </p>
      </section>
    </div>
  );
};

export default Contact;
