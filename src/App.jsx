import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import PlacesRoute from "./pages/PlacesRoute";
import About from "./pages/About";
import BlogsDetails from "./pages/BlogsDetails";
import Login from "./pages/login";
import AOS from "aos";
import "aos/dist/aos.css";
import Review from "./pages/Review";
import Pawna from "./pages/pawna";
import PaymentSuccess from "./components/Payment/PaymentSucess";
import PaymentComponent from "./components/Payment/PaymentComponent";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      
      
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogsDetails />} />
            <Route path="best-places" element={<PlacesRoute />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/review" element = {<Review />} />
            <Route path="/login" element = {<Login />} />
            <Route path="/Pawna" element = {<Pawna />} />
            <Route path="/payment" element = {<PaymentSuccess />} />
            <Route path="/paymentcomponent" element = {<PaymentComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
