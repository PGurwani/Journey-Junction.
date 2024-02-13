import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaUser, FaUsers, FaMoneyBillAlt, FaUtensils, FaCampground, FaFire, FaCheckCircle, FaCircle } from 'react-icons/fa';

const Pawna = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    // Auto-advance to the next slide every 5 seconds
    const intervalId = setInterval(handleNextSlide, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const Testimonial = ({ imageUrl, rating, content }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px', textAlign: 'center' }}>
      <img src={imageUrl} alt="User" style={{ width: '50px', height: '50px', borderRadius: '50%', marginBottom: '10px' }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Add rating stars based on the rating */}
        {Array.from({ length: rating }, (_, index) => (
          <span key={index} style={{ color: 'gold', fontSize: '20px', marginRight: '5px' }}>
            ★
          </span>
        ))}
      </div>
      <p style={{ marginTop: '10px' }}>{content}</p>
    </div>
  );

  return (
  <><div style={{ textAlign: 'center' }}>
      <h1>Welcome to Our Travel Website</h1>

      <div className='p-60' style={{ position: 'relative', width: '80%', margin: 'auto', overflow: 'hidden', marginTop: '20px' }}>
        {/* Carousel Container */}
        <div style={{ display: 'flex', transition: 'transform 0.8s ease-in-out', transform: `translateX(${-currentSlide * 100}%)` }}>
          {/* Slide 1 */}
          <div style={{ flex: '0 0 100%', boxSizing: 'border-box', paddingRight: '10px' }}>
            <img src="URL_FOR_YOUR_IMAGE_1" alt="Slide 1" style={{ width: '100%', borderRadius: '10px' }} />
            <p style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', color: '#fff', fontSize: '18px' }}>
              Caption for Slide 1
            </p>
          </div>
          {/* Slide 2 */}
          <div style={{ flex: '0 0 100%', boxSizing: 'border-box', paddingRight: '10px' }}>
            <img src="URL_FOR_YOUR_IMAGE_2" alt="Slide 2" style={{ width: '100%', borderRadius: '10px' }} />
            <p style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', color: '#fff', fontSize: '18px' }}>
              Caption for Slide 2
            </p>
          </div>
          {/* Slide 3 */}
          <div style={{ flex: '0 0 100%', boxSizing: 'border-box' }}>
            <img src="URL_FOR_YOUR_IMAGE_3" alt="Slide 3" style={{ width: '100%', borderRadius: '10px' }} />
            <p style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', color: '#fff', fontSize: '18px' }}>
              Caption for Slide 3
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button onClick={handlePrevSlide} style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', background: 'transparent', border: 'none', fontSize: '24px', cursor: 'pointer' }}>
          &#10094;
        </button>
        <button onClick={handleNextSlide} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', background: 'transparent', border: 'none', fontSize: '24px', cursor: 'pointer' }}>
          &#10095;
        </button>
      </div>
    </div><div style={{ marginTop: '30px' }}>
        <h2>Trip Details</h2>
      </div><div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <FaCalendarAlt style={{ fontSize: '30px', marginRight: '10px' }} />
        <p>01 Days | 02 Nights</p>
      </div><div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <FaUser style={{ fontSize: '30px', marginRight: '10px' }} />
        <p>Age: 18-50</p>
      </div><div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <FaUsers style={{ fontSize: '30px', marginRight: '10px' }} />
        <p>Max No of People: 18-20</p>
      </div><div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <FaMoneyBillAlt style={{ fontSize: '30px', marginRight: '10px' }} />
        <p>Price: Rs1000</p>
      </div>
      <div style={{ marginTop: '30px' }}>
        <h2>What Our Travellers Say</h2>
        {/* Add content for traveller testimonials here */}
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <Testimonial
            imageUrl="URL_FOR_USER_IMAGE_1"
            rating={5}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ligula nec elit finibus consectetur."
          />

          <Testimonial
            imageUrl="URL_FOR_USER_IMAGE_2"
            rating={4}
            content="Duis vehicula nulla nec nisl ullamcorper, id posuere arcu tincidunt. Sed eu elit in elit interdum vehicula."
          />
            <Testimonial
            imageUrl="URL_FOR_USER_IMAGE_2"
            rating={4}
            content="Duis vehicula nulla nec nisl ullamcorper, id posuere arcu tincidunt. Sed eu elit in elit interdum vehicula."
          />
          {/* Add more testimonials as needed */}
        </div>
      </div>
      <div style={{ marginTop: '30px' }}>
        <h2>Camping Highlights</h2>
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
      <div style={{ marginTop: '30px' }}>
        <h2>Highlights</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          {/* You can replace 'URL_FOR_HIGHLIGHTS_IMAGE' with the actual URL for the image */}
          <img src="URL_FOR_HIGHLIGHTS_IMAGE" alt="Highlights" style={{ width: '300px', height: '200px', borderRadius: '10px' }} />

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
      <div style={{ marginTop: '30px' }}>
        <h2>Location</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          {/* You can replace 'URL_FOR_LOCATION_IMAGE' with the actual URL for the image */}
          <img src="URL_FOR_LOCATION_IMAGE" alt="Location" style={{ width: '300px', height: '200px', borderRadius: '10px' }} />

          {/* Content */}
          <div style={{ maxWidth: '600px', textAlign: 'left' }}>
            <p>
              <strong>Pawna Lake</strong>, nestled amidst the picturesque Sahyadri mountains in Maharashtra, India, is a tranquil gem that captivates with its natural beauty. This pristine lake offers a serene escape for nature enthusiasts and adventurers alike. The surrounding hills, emerald forests, and clear waters create an enchanting landscape, making it a haven for camping, water activities, and moments of peaceful reflection.
            </p>
            <p>
              Pawna Lake's beauty lies in its harmonious blend of nature's simplicity and the promise of outdoor exploration.
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '30px' }}>
        <h2>Inclusions</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaCheckCircle style={{ fontSize: '24px', color: 'green', marginRight: '10px' }} />
          <p>Transportation from Mumbai to Mumbai</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaCheckCircle style={{ fontSize: '24px', color: 'green', marginRight: '10px' }} />
          <p>Breakfast & Lunch</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaCheckCircle style={{ fontSize: '24px', color: 'green', marginRight: '10px' }} />
          <p>Entrance Fees (If Any)</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaCheckCircle style={{ fontSize: '24px', color: 'green', marginRight: '10px' }} />
          <p>Basic First Aid</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaCheckCircle style={{ fontSize: '24px', color: 'green', marginRight: '10px' }} />
          <p>Journey Junction Expertise</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaCheckCircle style={{ fontSize: '24px', color: 'green', marginRight: '10px' }} />
          <p>New Friends made, new Bonds attached</p>
        </div>
      </div>
      <div style={{ marginTop: '30px' }}>
        <h2>Things to carry</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaCircle style={{ fontSize: '12px', color: 'black', marginRight: '10px' }} />
          <p>Identity Proof (Compulsory)</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaCircle style={{ fontSize: '12px', color: 'black', marginRight: '10px' }} />
          <p>Proper Trekking Shoes</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaCircle style={{ fontSize: '12px', color: 'black', marginRight: '10px' }} />
          <p>2 ltr of Water Bottle</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaCircle style={{ fontSize: '12px', color: 'black', marginRight: '10px' }} />
          <p>A backpack</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaCircle style={{ fontSize: '12px', color: 'black', marginRight: '10px' }} />
          <p>Basic first aid kit</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaCircle style={{ fontSize: '12px', color: 'black', marginRight: '10px' }} />
          <p>Extra Pair Of Clothes</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaCircle style={{ fontSize: '12px', color: 'black', marginRight: '10px' }} />
          <p>ORS, Glucose, Electrol, Personal Care Medicine</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaCircle style={{ fontSize: '12px', color: 'black', marginRight: '10px' }} />
          <p>A haversack to put in all the things to be carried, so that one has one's hands-free while trekking</p>
        </div>
      </div>
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <button style={{ padding: '10px 20px', fontSize: '18px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}>
          Book Now
        </button>
      </div>
      </>
        );
        };

        export default Pawna;
