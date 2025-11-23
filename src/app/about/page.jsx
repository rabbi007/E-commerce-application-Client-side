/* eslint-disable @next/next/no-img-element */
const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <div className="max-w-7xl mx-auto p-6 lg:px-50">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg opacity-80">
            Welcome to E-Commerce! We offer a wide range of products at the best prices.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg opacity-80">
            At E-Commerce, our mission is to provide high-quality products at unbeatable prices. We aim
            to create a seamless shopping experience with excellent customer service.
          </p>
        </section>

        {/* The Team Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs transition-all hover:shadow-xl hover:scale-105">
              <img
                src="https://i.ibb.co/zV02ypvk/DSC-0139.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Khandaker</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs transition-all hover:shadow-xl hover:scale-105">
              <img
                src="https://i.ibb.co/zV02ypvk/DSC-0139.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Reza-e-Rabbi</h3>
              <p className="text-gray-600">COO</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs transition-all hover:shadow-xl hover:scale-105">
              <img
                src="https://i.ibb.co/zV02ypvk/DSC-0139.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Rabbi</h3>
              <p className="text-gray-600">Marketing Head</p>
            </div>
          </div>
        </section>

       
      </div>
    </div>
  );
};

export default About;
