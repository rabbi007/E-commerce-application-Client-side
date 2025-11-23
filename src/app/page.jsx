import About from "./about/page";
import LatestProducts from "./latest-products/latest-products";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Welcome to E-Commerce</h1>
      <p className="text-lg text-center mb-4">The best place to shop online for the latest products!</p>
      <div className="text-center">
        <a href="/products" className="text-blue-500 hover:text-blue-700">
          Explore Our Products
        </a>
      </div>
      <div>
        <LatestProducts/>
      </div>
    </div>
  );
};

export default Home;
