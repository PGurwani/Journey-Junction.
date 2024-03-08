import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PlaceCard from "./PlaceCard";
import { loadTawkToScript } from "../../tawktoscript";

const Places = ({ handleOrderPopup }) => {
  const [placesData, setPlacesData] = useState([]);

  useEffect(() => {
    // Load Tawk.to script once the component is mounted
    loadTawkToScript();

    // Fetch data from API
    fetch("http://localhost:8081/api/groups")
      .then((response) => response.json())
      .then((data) => setPlacesData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {placesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                img={item.img}
                title={item.title}
                location={item.location}
                description={item.description}
                price={item.price}
                type={item.type}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

Places.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};

export default Places;
