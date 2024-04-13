import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PlaceCard from "./PlaceCard";
import { loadTawkToScript } from "../../tawktoscript";
import Cookies from "js-cookie";
import img2 from "../../assets/places/bhaja-caves.jpg";
import img3 from "../../assets/places/Lonavala_Pawna_Lake-Main.jpg"
import img4 from "../../assets/places/karjat lake.jpg"

const Places = () => {
  const [placesData, setPlacesData] = useState([]);
  const [images, setImages] = useState({});

  useEffect(() => {
    // Load Tawk.to script once the component is mounted
    loadTawkToScript();

    // Fetch data from API
    fetch("http://localhost:8081/api/groups")
      .then((response) => response.json())
      .then((data) => {
        setPlacesData(data);
        // Set the trip ID in a cookie
        if (data.length > 0) {
          const imageLinks = {};
          data.forEach((element) => {
            // Store image URLs in the state
            imageLinks[element.id] = element.image_link;
          });
          setImages(imageLinks);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));

  }, []);

  const handleOrder = (placeId, seatCount) => {
    if (seatCount > 0) {
      // Update the seat count
      fetch(`http://localhost:8081/api/update-seats/${placeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          placeId: placeId,
        }),
      })
        .then((response) => {
          if (response.ok) {
            // Handle success
            console.log("Seats count updated successfully");
          } else {
            // Handle error
            console.error("Failed to update seats count");
          }
        })
        .catch((error) => {
          console.error("Error updating seats count:", error);
        });
    } else {
      window.alert("Cannot join. Seats are not available.");
    }
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      <section data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Best Places to Visit
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {placesData.map((item, index) => (
            <PlaceCard
              key={index}
              img={
                item.id === 2
                  ? img2
                  : item.id === 3
                  ? img3
                  : item.id === 4
                  ? img4
                  : item.image_link || img1
              } 
              title={item.trip_name}
              location={item.place}
              description={item.description}
              
              price={item.price}
              type={item.type}
              seatCount={item.max_people}
              onOrder={() => handleOrder(item.id, item.max_people)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

// Places.propTypes = {
//   handleOrderPopup: PropTypes.func.isRequired,
// };

export default Places;
