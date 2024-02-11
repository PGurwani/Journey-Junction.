import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const PlaceCard = ({
  img,
  title,
  location,
  description,
  price,
  button,
  handleOrderPopup,
}) => {
  return (
    <div className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer"
        onClick={handleOrderPopup}
      >
        <div className="overflow-hidden">
          <img
            src={img}   //src = {require("")}
            alt="No image"
            className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>

        <div className="space-y-2 p-3">
          <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>
          <div className="flex items-center gap-2 opacity-70">
            <IoLocationSharp />
            <span>{location}</span>
          </div>
          <p className="line-clamp-2">{description}</p>
          <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
          <div className="opacity-70">
            {/* <Button type="button" class="btn">View Details</Button> */}
            <div className="opacity-70">
            <Button variant="contained" color="success">
        Join Group
      </Button>
            </div>
            <div className="opacity-70">
           <a href="https://www.google.com/search?gs_ssp=eJzj4tZP1zcsM04vTK4wMmD04k3MyUxKLE1XSEpNTM4AAH0WCQo&q=alibaug+beach&rlz=1C1ONGR_enIN1060IN1060&oq=alliba&gs_lcrp=EgZjaHJvbWUqDAgDEC4YChixAxiABDIGCAAQRRg5MhgIARAuGAoYgwEYxwEYsQMYyQMY0QMYgAQyDwgCEC4YChiDARixAxiABDIMCAMQLhgKGLEDGIAEMgwIBBAAGAoYsQMYgAQyDAgFEAAYChixAxiABDIVCAYQLhgKGIMBGMcBGLEDGNEDGIAEMgwIBxAAGAoYsQMYgAQyDwgIEAAYChixAxiABBiKBdIBCDQ1MjdqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8" target="blank"><p variant="contained" color="success">
        View Details
      </p></a> 
      
            </div>
         </div>

            <div>
              <p className="text-2xl font-bold">Rs {price}</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default PlaceCard;
