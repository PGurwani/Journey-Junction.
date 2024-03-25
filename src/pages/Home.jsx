import React from "react";
import Hero from "../components/Hero/Hero";
import NatureVid from "../assets/video/mainvideo.mp4";
import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";
import BannerImg from "../assets/river.jpeg";
import Banner2 from "../assets/nature.jpg";
import OrderPopup from "../components/OrderPopup/OrderPopup";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div className="relative">
        <div className="h-[700px] relative">
          {/* Blur overlay */}
          <div className="absolute inset-0 h-full w-full bg-black opacity-50 filter blur-md"></div>

          {/* Video */}
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>

          {/* Text overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
            <h1 className="text-4xl font-bold">Where Solo Travelers Find Their Perfect Expedition Partners, Redefining Adventure in Every Step Together!</h1>
          </div>
        </div>


        <Places handleOrderPopup={handleOrderPopup} />
        <BannerPic img={BannerImg} />
        <BlogsComp />
        <Banner />
        <BannerPic img={Banner2} />
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;