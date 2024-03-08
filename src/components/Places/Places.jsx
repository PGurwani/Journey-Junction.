import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PlaceCard from "./PlaceCard";
import { loadTawkToScript } from "../../tawktoscript";
import Cookies from "js-cookie";

const Places = () => {
  const [placesData, setPlacesData] = useState([]);

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
        Cookies.set("tripId", data[0].id);
        console.log(data[0].id) 
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
}, []);

  const handleOrder = (placeId,seatCount) => {
    console.log(placeId)

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
              img={item.image_link}
              title={item.trip_name}
              location={item.place}
              description={item.description}
              price={item.price}
              type={item.type}
              seatCount={item.max_people}
              onOrder={() => handleOrder(item.id,item.max_people)} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

Places.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};

export default Places;
