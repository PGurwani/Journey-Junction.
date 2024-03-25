import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import axios from 'axios';
import 'aos/dist/aos.css'; // Import AOS styles
import { FaCalendarAlt, FaUser, FaUsers, FaMoneyBillAlt, FaUtensils, FaCampground, FaFire, FaCheckCircle, FaCircle } from 'react-icons/fa';
import PaymentComponent from '../components/Payment/PaymentComponent';


const Pawna = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPayment, setShowPayment] = useState(false);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };
  
  const handleBookNow = async () => {
    try {
      // Make a GET request to your backend API to get order details
      const response = await axios.get('http://localhost:8081/api/payments');
      const { paymentLinkId, paymentLinkUrl } = response.data;
  
      // Open the payment link URL in a new tab/window
      window.open(paymentLinkUrl, '_blank');
  
    } catch (error) {
      // Handle error
      console.error('Error fetching payment details:', error.message);
      // Add logic to show an error message or take appropriate action
    }
  };
  


  useEffect(() => {
    // Auto-advance to the next slide every 5 seconds
    const intervalId = setInterval(handleNextSlide, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh(); // Manually trigger AOS refresh
  }, []);
  useEffect(() => {
    // Manually trigger AOS refresh after rendering
    AOS.refresh();
  });
  const Testimonial = ({ imagePath, rating, content, backgroundColor }) => (
    <div style={{ backgroundColor, padding: '15px', borderRadius: '10px', textAlign: 'center', marginBottom: '20px', width: '400px' }}>
      <img src={imagePath} alt="User" style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '10px' }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
        {/* Add rating stars based on the rating */}
        {Array.from({ length: rating }, (_, index) => (
          <span key={index} style={{ color: 'gold', fontSize: '20px', marginRight: '5px' }}>
            ★
          </span>
        ))}
      </div>
      <p style={{ marginTop: '10px', fontSize: '16px', lineHeight: '1.5' }}>{content}</p>
    </div>
  );

  return (
  <>
   <div style={{ backgroundColor: '#f9f6ee' }}>
  <div style={{ textAlign: 'center' }}>
      <h1>Welcome to Our Travel Website</h1>

      <div className='p-10' style={{ position: 'relative', width: '100%', margin: 'auto', overflow: 'hidden', marginTop: '2px' }}>
        {/* Carousel Container */}
        <div style={{ display: 'flex', transition: 'transform 0.8s ease-in-out', transform: `translateX(${-currentSlide * 100}%)` }}>
          {/* Slide 1 */}
          <div style={{ flex: '0 0 100%', boxSizing: 'border-box', paddingRight: '10px',marginright: '15px',marginleft:'15px' }}>
            <img src="../src/assets/places/pawna3.jpg" alt="Slide 1" style={{ width: '100%', borderRadius: '10px',height:'67%' }} />
            <h1 style={{ position: 'absolute', top: '60%', right: '53%', transform: 'translate(-50%, -50%)', color: '#fff',fontWeight: 'bold',fontSize:'30px' }}>PAWNA LAKE</h1>
      <p style={{ position: 'absolute',top: '62%', left: '50%', transform: 'translateX(-50%)', color: '#fff', fontSize: '18px', textAlign: 'center' }}>
        Pawna Lake's pristine waters mirror the azure skies, creating a breathtaking canvas of nature's beauty.
      </p>
          </div>
          {/* Slide 2 */}
          <div style={{ flex: '0 0 100%', boxSizing: 'border-box', paddingRight: '10px', position: 'relative',marginRight: '15px',marginleft:'15px' }}>
      <img src="../src/assets/places/pawna4.jpg" alt="Slide 2" style={{ width: '100%', borderRadius: '10px', height: '67%' }} />
      <h1 style={{ position: 'absolute', top: '60%', left: '33%', transform: 'translate(-50%, -50%)', color: '#fff', fontWeight: 'bold', fontSize: '30px' }}>PAWNA LAKE</h1>
      <p style={{ position: 'absolute', bottom: '310px', left: '50%', transform: 'translateX(-50%)', color: '#fff', fontSize: '18px', textAlign: 'center' }}>
        Nestled amidst the Sahyadri mountains, Pawna Lake is a serene jewel, offering solace to the wanderer's soul.
      </p>
    </div>
        {/* Slide 3 */}
<div style={{ flex: '0 0 100%', boxSizing: 'border-box', paddingRight: '10px', position: 'relative' ,marginRight: '15px'}}>
  <img src="../src/assets/places/pawna6.jpeg" alt="Slide 3" style={{ width: '100%', borderRadius: '10px', height: '67%' }} />
  <h1 style={{ position: 'absolute', top: '60%', left: '33%', transform: 'translate(-50%, -50%)', color: '#fff', fontWeight: 'bold', fontSize: '30px' }}>PAWNA LAKE</h1>
  <p style={{ position: 'absolute', bottom: '310px', left: '50%', transform: 'translateX(-50%)', color: '#fff', fontSize: '18px' }}>
  Pawna Lake's beauty lies in its simplicity, where the gentle ripples and calm waters invite you to unwind.
  </p>
</div>
        </div>
        {/* Navigation Buttons */}
        <button onClick={handlePrevSlide} style={{ position: 'absolute', top: '40%', left: '10px', transform: 'translateY(-50%)', background: 'transparent', border: 'none', fontSize: '24px', cursor: 'pointer' }}>
          &#10094;
        </button>
        <button onClick={handleNextSlide} style={{ position: 'absolute', top: '40%', right: '10px', transform: 'translateY(-50%)', background: 'transparent', border: 'none', fontSize: '24px', cursor: 'pointer' }}>
          &#10095;
        </button>
      </div>
    </div>
    <div style={{ marginBottom: '50px', marginTop:'-300px', paddingTop: '10px', textAlign: 'center', backgroundColor: '#fff', width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', borderRadius:'10px' }}>
  <h2 style={{ fontWeight: 'bold', fontSize:'30px' }}>Trip Details</h2>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'right', marginBottom: '10px', width: '100%' }}>
    <div style={{ display: 'flex', alignItems: 'right', marginBottom: '10px',fontSize:'20px' }}>
      <FaCalendarAlt style={{ fontSize: '30px', marginRight: '10px' }} />
      <p>01 Days | 02 Nights</p>
    </div>
    <div style={{ display: 'flex', alignItems: 'right', marginBottom: '10px',fontSize:'20px' }}>
      <FaUser style={{ fontSize: '30px', marginRight: '10px' }} />
      <p>Age: 18-50</p>
    </div>
    <div style={{ display: 'flex', alignItems: 'right', marginBottom: '10px',fontSize:'20px' }}>
      <FaUsers style={{ fontSize: '30px', marginRight: '10px' }} />
      <p>Max No of People: 18-20</p>
    </div>
    <div style={{ display: 'flex', alignItems: 'right', marginBottom: '10px',fontSize:'20px'}}>
      <FaMoneyBillAlt style={{ fontSize: '30px', marginRight: '10px' }} />
      <p>Price: Rs1000</p>
    </div>
  </div>
</div>
<div style={{ marginTop: '30px', textAlign: 'center', padding: '20px' }}>
  <h2 style={{ fontWeight: 'bold',fontSize:'30px' }}>What Our Travellers Say</h2>
  {/* Add content for traveller testimonials here */}
  <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    <Testimonial
      imagePath="../src/assets/places/gupta.jpg"
      rating={5}
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ligula nec elit finibus consectetur."
      backgroundColor="#fff"
    />

    <Testimonial
      imagePath="../src/assets/places/tejas.jpg"
      rating={4}
      content="Duis vehicula nulla nec nisl ullamcorper, id posuere arcu tincidunt. Sed eu elit in elit interdum vehicula."
      backgroundColor="#fff"
    />

    <Testimonial
      imagePath="../src/assets/places/shreyas1.jpg"
      rating={4}
      content="Duis vehicula nulla nec nisl ullamcorper, id posuere arcu tincidunt. Sed eu elit in elit interdum vehicula."
      backgroundColor="#fff"
    />
    {/* Add more testimonials as needed */}
  </div>
</div>

<div style={{ marginTop: '30px', textAlign: 'center', backgroundColor: '#fff', padding: '20px',width:'70%', marginLeft:'auto',marginRight:'auto',borderRadius:'10px' ,height:'70%'}}>
  <h2 style={{ fontWeight: 'bold',fontSize:'30px'}}>Camping Highlights</h2>
  <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    <div>
      <FaUtensils style={{ fontSize: '50px', color: 'brown' }} />
      <p>Meals</p>
    </div>
    <div>
      <FaCampground style={{ fontSize: '50px', color: 'green' }} />
      <p>Tent</p>
    </div>
    <div>
      <FaFire style={{ fontSize: '50px', color: 'red' }} />
      <p>Bonfire</p>
    </div>
  </div>
</div>

<div style={{ marginTop: '30px', textAlign: 'center', backgroundColor: '#fff', padding: '20px', width:'80%',marginLeft:'auto',marginRight:'auto',borderRadius:'10px' }}>
  <h2 style={{ fontWeight: 'bold', fontSize:'30px'}}>Highlights</h2>
  <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    {/* Replace 'PATH_FOR_HIGHLIGHTS_IMAGE' with the actual path for the image */}
    <img src="../src/assets/places/activities.jpg" alt="Highlights" style={{ width: '500px', height: '400px', borderRadius: '10px' }} />

    {/* Content */}
    <div style={{ maxWidth: '600px', textAlign: 'left' }}>
      <p>
        <strong>Set up your tent by the lakeside</strong> and immerse yourself in the tranquility of nature. Camping at Pawna Lake is a popular activity, allowing you to stargaze, bond with friends, and rejuvenate.
      </p>
      <p>
        <strong>Boating and Kayaking:</strong> Explore the calm waters of Pawna Lake by renting a paddleboat or a kayak. It's an excellent way to enjoy the scenic surroundings and stay active.
      </p>
      <p>
        <strong>Photography:</strong> The breathtaking landscapes, including the lake, hills, and the changing sky, offer fantastic photo opportunities. Capture the beauty of nature and create lasting memories.
      </p>
      <p>
        <strong>Picnicking:</strong> Pack a picnic and enjoy a meal with your loved ones in the lap of nature. The lakeside is an ideal spot for a leisurely outdoor feast.
      </p>
      <p>
        <strong>Trekking:</strong> The nearby hills provide fantastic trekking opportunities. You can embark on a trek to explore the rugged terrain and take in panoramic views of the lake and its surroundings.
      </p>
    </div>
  </div>
</div>

<div style={{ marginTop: '30px', textAlign: 'center', backgroundColor: '#fff', padding: '20px', width:'80%',marginLeft:'auto',marginRight:'auto',borderRadius:'10px'  }}>
  <h2 style={{ fontWeight: 'bold',fontSize:'30px' }}>Location</h2>
  <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    {/* Replace 'PATH_FOR_LOCATION_IMAGE' with the actual path for the image */}

    {/* Content */}
    <div style={{ maxWidth: '600px', textAlign: 'left' }}>
      <p>
        <strong>Pawna Lake</strong>, nestled amidst the picturesque Sahyadri mountains in Maharashtra, India, is a tranquil gem that captivates with its natural beauty. This pristine lake offers a serene escape for nature enthusiasts and adventurers alike. The surrounding hills, emerald forests, and clear waters create an enchanting landscape, making it a haven for camping, water activities, and moments of peaceful reflection.
      </p>
      <p>
        Pawna Lake's beauty lies in its harmonious blend of nature's simplicity and the promise of outdoor exploration.
      </p>
    </div>
    <a href="https://maps.app.goo.gl/8ah344vk8MNnGbpYA" target="_blank" rel="noopener noreferrer">
      <img src="../src/assets/places/location.png" alt="Location" style={{ width: '500px', height: '300px', borderRadius: '10px' }} />
    </a>
  </div>
</div>
<div style={{ marginTop: '30px', textAlign: 'center', backgroundColor: '#fff', padding: '20px', width:'80%',marginLeft:'auto',marginRight:'auto',borderRadius:'10px' }}>
  <h2 style={{ fontWeight: 'bold',fontSize:'30px' }}>Inclusions</h2>
  <div style={{ display: 'flex', alignItems: 'right', flexDirection: 'column' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <FaCheckCircle style={{ fontSize: '24px', color: 'green', marginRight: '10px' }} />
      <p>Transportation from Mumbai to Mumbai</p>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <FaCheckCircle style={{ fontSize: '24px', color: 'green', marginRight: '10px' }} />
      <p>Breakfast & Lunch</p>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <FaCheckCircle style={{ fontSize: '24px', color: 'green', marginRight: '10px' }} />
      <p>Entrance Fees (If Any)</p>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <FaCheckCircle style={{ fontSize: '24px', color: 'green', marginRight: '10px' }} />
      <p>Basic First Aid</p>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <FaCheckCircle style={{ fontSize: '24px', color: 'green', marginRight: '10px' }} />
      <p>Journey Junction Expertise</p>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <FaCheckCircle style={{ fontSize: '24px', color: 'green', marginRight: '10px' }} />
      <p>New Friends made, new Bonds attached</p>
    </div>
  </div>
</div>

<div style={{ marginTop: '30px', textAlign: 'center', backgroundColor: '#fff', padding: '20px', width:'80%',marginLeft:'auto',marginRight:'auto',borderRadius:'10px' }}>
  <h2 style={{ fontWeight: 'bold',fontSize:'30px' }}>Things to carry</h2>
  <div style={{ display: 'flex', alignItems: 'right', flexDirection: 'column' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <FaCircle style={{ fontSize: '12px', color: 'black', marginRight: '10px' }} />
      <p>Identity Proof (Compulsory)</p>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <FaCircle style={{ fontSize: '12px', color: 'black', marginRight: '10px' }} />
      <p>Proper Trekking Shoes</p>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <FaCircle style={{ fontSize: '12px', color: 'black', marginRight: '10px' }} />
      <p>2 ltr of Water Bottle</p>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <FaCircle style={{ fontSize: '12px', color: 'black', marginRight: '10px' }} />
      <p>A backpack</p>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <FaCircle style={{ fontSize: '12px', color: 'black', marginRight: '10px' }} />
      <p>Basic first aid kit</p>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <FaCircle style={{ fontSize: '12px', color: 'black', marginRight: '10px' }} />
      <p>Extra Pair Of Clothes</p>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <FaCircle style={{ fontSize: '12px', color: 'black', marginRight: '10px' }} />
      <p>ORS, Glucose, Electrol, Personal Care Medicine</p>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <FaCircle style={{ fontSize: '12px', color: 'black', marginRight: '10px' }} />
      <p>A haversack to put in all the things to be carried, so that one has one's hands-free while trekking</p>
    </div>
  </div>
</div>

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <button style={{ padding: '10px 20px', fontSize: '18px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', cursor: 'pointer' }} onClick={handleBookNow}>
          Book Now
        </button>
      </div>
      </div>
      {showPayment && (
        <PaymentComponent
          amount={1000}  // Replace with your actual amount
          orderId={paymentDetails.orderId}  // Use the orderId fetched from the backend
          onSuccess={(response) => {
            // Handle success
            console.log('Payment successful:', response);
            // Add logic to navigate to the next step or update the UI
          }}
          onCancel={(response) => {
            // Handle failure
            console.error('Payment failed:', response.error.description);
            // Add logic to show an error message or take appropriate action
          }}
        />
      )}
      </>
    
        );
        };
        export default Pawna;

        