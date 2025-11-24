import { FaStar } from 'react-icons/fa'; // For the star icon

const reviews = [
  {
    id: 1,
    name: "TAFSIR KHAN", 
    photo: "https://randomuser.me/api/portraits/men/1.jpg", 
    rating: 5,
    review: "ইলেকট্রনিক পণ্য কিনে আমি খুবই সন্তুষ্ট। টিভি এবং স্মার্টফোনের গুণমান অত্যন্ত ভালো।", 
    category: "Electronics",
  },
  {
    id: 2,
    name: "TROYEE REZA", 
    photo: "https://randomuser.me/api/portraits/women/2.jpg", 
    rating: 4,
    review: "গ্যাজেটগুলি আমার দৈনন্দিন জীবনে অনেক সাহায্য করেছে। স্মার্টওয়াচ এবং ফিটনেস ট্র্যাকার সত্যিই ভালো।", 
    category: "Gadgets",
  },
  {
    id: 3,
    name: "TITAS ALI", 
    photo: "https://randomuser.me/api/portraits/men/3.jpg", 
    rating: 5,
    review: "অ্যাক্সেসরিজের সংগ্রহ অসাধারণ! হেডফোন, চার্জার এবং ফোন কভার সবই খুব ভালো মানের।", 
    category: "Accessories",
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-10 bg-gray-50">
    {/* <section className="py-16 bg-gradient-to-r from-[#cd0808] via-blue-500 to-[#632608]"> */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          What Our Customers Are Saying
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full transform transition duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.photo}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{review.name}</h3>
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`text-yellow-400 ${index < review.rating ? "text-yellow-500" : ""}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Display review based on category */}
              <p className="text-gray-600">
                <strong>Category:</strong> {review.category}
              </p>
              <p className="text-gray-600 text-sm">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
