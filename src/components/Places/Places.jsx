import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/alibagh.jpg";
import Img2 from "../../assets/places/Rajmachi fort.jpg";
import Img3 from "../../assets/places/matheranjpg.jpg";
import Img4 from "../../assets/places/bhaja-caves.jpg";
import Img5 from "../../assets/places/Lonavala_Pawna_Lake-Main.jpg";
import Img6 from "../../assets/places/karjat lake.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Alibaug Beach",
    location: "Alibaug",
    description: "Alibaug is a small coastal town in the Konkan region of Maharashtra, which is particularly known for its beaches, villas, and beautiful scenery. Alibaug is also known as Alibag, which is popular as a weekend gateway from the cities of Mumbai and Pune.Alibaug has received the name of ‘mini-Goa’ due to the high tourist footfall all year.",
    price: 3000,
    type: "View Details",
  },
  {
    img: Img2,
    title: "Rajmachi Fort",
    location: "Lonavala",
    description:
      "Rajmachi is a little village situated in the Sahyadri mountain spine of the Konkan region of Maharashtra and Rajmachi is, also called Udhewadi. A visit to this Fort recovers the senses with its gorgeous views. A trip to the Rajmachi Fort can lead you to the region’s secret sceneries, which will charm you. From this place, you can view the Duke’s Nose. This is certainly one of Lonavala’s most exhilarating activities. ",
    price: 4000,
    type: "View Details",
  },
  {
    img: Img3,
    title: "Matheran",
    location: "Matheran",
    description:
      "The Matheran hill station is the best place to adore the sunset and sunrise view, along with some mind-blowing sceneries to keep you fresh and upfront. This extraordinary hill station suggests the best tourist places in Matheran, untouched and undisturbed by the town’s bustling city life. The place is located on the Western Ghats that ranges from around 800 meters above sea level. The place always has pleasant weather to enjoy during any time of the year, but its beauty gets added up during the season of rain and thunderstorm.",
    price: 6500,
    type: "View Details",
  },
  {
    img: Img4,
    title: "Bhaja Caves",
    location: "Lonavala",
    description: " Bhaja Caves is one of the top places to visit in Lonavala. The Bhaja caves consist of 22 rock-cut Buddhist caves situated near Pune. You can visit mostly along with the Karla Caves, and these caves are supposed to have existed since the 2nd century BC. ",
    price: 5000,
    type: "View Details",
  },
  {
    img: Img5,
    title: "Pawna Lake",
    location: "Lonavala",
    description:
      "Pawna Lake is a famous place to visit in Lonavala for picnic and camping sites, with a spectacular landscape. Located 20 km away from Lonavala, Pawna Lake is an artificial lake encircled by immense beauty. The lake is formed by the Dam built across the Pawna River, and the lake is an exact picnic spot in Lonavala. ",
    price: 5500,
    type: "View Details",
  },
  {
    img: Img6,
    title: "Karjat",
    location: "Lonavala",
    description:
      "Karjat is one of the well-known places in Maharashtra and is located in Lonavala. Travelers mostly prefer Lonavala Lake, Talao Pali, and Khandala Lake as the best nine lakes near Karjat.Bounded by the beautiful greenery and majestic mountains, the campsite is an ideal gateway to spend an unforgettable vacation with your family. Revel in happy and well-maintained camps nearby the lake and get an exclusive stay experience during the trip. ",
    price: 6000,
    type: "View Details",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
