import LatestProducts from "./latest-products/latest-products";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div>
        <h1 className="text-4xl font-bold text-center mb-6 text-yellow-600">
          Welcome to 'Click-&-Buy'
        </h1>
        <p className="text-3xl text-center mb-4">Click - Buy - Enjoy!</p>
      </div>

      <div>
        <LatestProducts />
      </div>
    </div>
  );
};

export default Home;
