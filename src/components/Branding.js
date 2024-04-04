import React from "react";

import about from "../assets/about.png"


import {
    
    faDownload,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Branding = () => {
  return (
    <div className="mt-12 space-y-4">
      <h2 className="text-2xl font-bold">
        Download Images and Logos
        <span className="text-gray-500">
          <FontAwesomeIcon icon={faDownload} className="ml-1" />
        </span>
      </h2>
      <ul className="flex flex-wrap space-x-4">
        <li>
          <img
            src={about}
            alt="image1"
            className="w-24 h-24 object-cover rounded-md cursor-pointer"
          />
        </li>
        <li>
          <img
            src="/image2.png"
            alt="image2"
            className="w-24 h-24 object-cover rounded-md cursor-pointer"
          />
        </li>
        <li>
          <img
            src="/image3.png"
            alt="image3"
            className="w-24 h-24 object-cover rounded-md cursor-pointer"
          />
        </li>
        <li>
          <img
            src="/logo.svg"
            alt="logo"
            className="w-24 h-24 object-cover rounded-md cursor-pointer"
          />
        </li>
      </ul>
    </div>
  );
};

export default Branding;