"use client";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Electronics",
    desc: "Discover the latest in electronics, from TVs to smartphones and more.",
    // Updated image from Unsplash related to "Electronics"
    img: "https://images.unsplash.com/photo-1760520338238-4137dd2dc28f?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    badge: "Electronics",
    bg: "from-[#e3f2fd] via-white to-[#e8f5e9]",
  },
  {
    id: 2,
    title: "Gadgets",
    desc: "Find the best gadgets to enhance your daily life. From smartwatches to fitness trackers.",
    // Updated image from Unsplash related to "Gadgets"
    img: "https://images.unsplash.com/photo-1636115305669-9096bffe87fd?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    badge: "Gadgets",
    bg: "from-[#fff3e0] via-white to-[#e3f2fd]",
  },
  {
    id: 3,
    title: "Accessories",
    desc: "Shop our wide range of accessories, including headphones, chargers, and cases.",
    // Updated image from Unsplash related to "Accessories"
    img: "https://images.unsplash.com/photo-1626718338894-053af14e3667?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    badge: "Accessories",
    bg: "from-[#fce8e6] via-white to-[#f1f8e9]",
  },
];


const Banner = () => {
  return (
    <section className="relative bg-gray-50 mt-5">
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          spaceBetween={24}
          slidesPerView={1}
          className="rounded-2xl shadow-lg overflow-hidden"
        >
          {slides.map((s) => (
            <SwiperSlide key={s.id}>
              <div
                className={`relative bg-gradient-to-br ${s.bg} dark:from-[#0b1220] dark:via-[#0f1526] dark:to-[#0b1220]`}
              >
                {/* Background image */}
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-[380px] md:h-[460px] object-cover opacity-70"
                />
                {/* Overlay content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="px-6 md:px-12 max-w-3xl">
                    <span className="inline-block text-xs md:text-sm font-semibold bg-white/90 text-gray-900 dark:bg-white/20 dark:text-white px-3 py-1 rounded-full shadow">
                      {s.badge}
                    </span>

                    <h2 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1a73e8] via-[#34a853] to-[#ea4335]">
                      {s.title}
                    </h2>

                    <p className="mt-3 text-sm md:text-base text-gray-900/90 dark:text-gray-100/90 max-w-2xl">
                      {s.desc}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href="/products"
                        className="btn bg-[#1a73e8] hover:bg-[#185abc] text-white border-none rounded-xl"
                      >
                        Explore Products
                      </a>
                      <a
                        href="/manage-products"
                        className="btn bg-[#34a853] hover:bg-[#2c8e46] text-white border-none rounded-xl"
                      >
                        Manage Products
                      </a>
                    </div>
                  </div>
                </div>

                {/* Soft corner blobs */}
                <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl bg-[#4285f4]/30" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 rounded-full blur-3xl bg-[#34a853]/30" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
