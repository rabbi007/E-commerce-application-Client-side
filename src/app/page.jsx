import Banner from "./components/banner";
import BlogPage from "./components/blog";
import ColorfulLine from "./components/ColorfulLine";
import CustomerReviews from "./components/CustomerReviews";
import LatestProducts from "./components/latest-products";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto bg-gray-50">
      <div>
        <Banner />
      </div>
      <div>
        <LatestProducts />
      </div>
      <div>
        <ColorfulLine />
      </div>
      <div>
        <BlogPage />
      </div>
      <div>
        <ColorfulLine />
      </div>
      <div>
        <CustomerReviews />
      </div>
    </div>
  );
};

export default Home;
