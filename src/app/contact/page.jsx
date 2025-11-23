/* eslint-disable @next/next/no-img-element */
const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <div className="max-w-7xl mx-auto p-6 lg:px-50">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg opacity-80">
            We'd love to hear from you! Please fill out the form below to get in touch with us.
          </p>
        </section>

        {/* Contact Form Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-semibold text-gray-800 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold text-gray-800 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold text-gray-800 mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="6"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Footer Section */}
        <footer className="text-center">
          <p className="text-lg opacity-80">
           Email us: &nbsp;
            <a href="mailto:rabbi@live.com" className="text-black hover:underline">
              support@click-n-buy.com
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
