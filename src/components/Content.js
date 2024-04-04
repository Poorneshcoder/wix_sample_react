import React from "react";

import business from "../assets/business.png";
import about from "../assets/about.png";
import investor from "../assets/invest-2.png";

import {
    faArrowUpRightFromSquare,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content = () => {
  const pressReleases = [
    {
      title:
        "Wix Wins Google Cloud Expansion Partner of the Year Award",
      href: "https://www.google.com/",
    },
    {
      title:
        "Wix Relaunches its Solution for Hotels - Now Powered by HotelRunner",
      href: "https://www.google.com/",
    },
    {
      title:
        "Wix and LegalZoom Join Forces to Offer Personalized Solutions for Small Businesses",
      href: "https://www.google.com/",
    },
    {
      title: "Wix Events Launches Seating Map Builder",
      href: "https://www.google.com/",
    },
  ];

  const inTheNews = [
    {
      title: "How E-Scooters Are Transforming Tel Aviv",
      href: "https://www.google.com/",
    },
    {
      title:
        "Wix, LegalZoom Collaborate To Boost Online Presence Of Small Businesses",
      href: "https://www.google.com/",
    },
    {
      title: "Wix Partners with Agencies to Build High-Performance Websites",
      href: "https://www.google.com/",
    },
    {
      title: "Nurturing a Developer-Centric Culture",
      href: "https://www.google.com/",
    },
  ];

  return (
    <div className="mt-12 space-y-8 w-[80%] m-auto">

      <div className="flex">
        <h2 className="text-2xl font-bold my-10">Press Releases</h2>
        <a
          href="https://www.google.com/"
          className="flex items-center text-blue-600 hover:underline hover:text-blue-800 mx-5"
        >
          View All
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="ml-1"
          />
        </a>
      </div>
      <ul className="space-y-4">
        {pressReleases.map(({ title, href }, index) => (
          <li key={index}>
            <div className="flex flex-col md:flex-row md:justify-between" >
            <a href={href} className="text-gray-800 hover:underline w-full md:w-auto mb-4 md:mb-0">
             {title}
            </a>
            <div className="w-full md:w-auto" >READ MORE</div>
            </div>
            
            <hr class="h-[3px] bg-gray-500 my-10"/>
          </li>
         
        ))}
      </ul>

      <div className="flex">
        <h2 className="text-2xl font-bold my-10">In The News</h2>
        <a
          href="https://www.google.com/"
          className="flex items-center text-blue-600 hover:underline hover:text-blue-800 mx-5"
        >
          View All
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="ml-1"
          />
        </a>
      </div>
      <ul className="space-y-4">
        {inTheNews.map(({ title, href }, index) => (
          <li key={index}>
            <div class="flex flex-col md:flex-row md:justify-between" > 
            <a href={href} className="text-gray-800 hover:underline w-full md:w-auto mb-4 md:mb-0">
              {title}
            </a>
            <div class="w-full md:w-auto" >READ MORE</div>
            </div>
            
            <hr class="h-[3px] bg-gray-500 my-10"/>
          </li>
          
        ))}
      </ul>


        <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-[30%] mb-4 mt-10">
                <img src={business} alt="business" className="w-full mb-4 md:mb-0 md:w-auto" />
                <h2 className="text-2xl font-bold mb-5 mt-10">Brand Assets</h2>
                <p>Wix is more than just a website builder; it's a brand that empowers individuals and businesses to create stunning online presences effortlessly. With its user-friendly interface and powerful features, Wix enables users to bring their visions to life, from beautifully designed websites to robust e-commerce stores. As a trusted name in the industry, Wix offers creative freedom, scalability, and reliability, making it the go-to choice for millions of users worldwide. </p>
            </div>

            <div className="w-full md:w-[30%] mb-4 mt-10">
                <img src={about} alt="about" className="w-full mb-4 md:mb-0 md:w-auto" />
                <h2 className="text-2xl font-bold mb-5 mt-10">About Us</h2>
                <p className="text-gray-800">Wix makes it easy for everyone to get online with a stunning, professional, and powerful web presence. As a trusted name in the industry, Wix offers creative freedom, scalability, and reliability, making it the go-to choice for millions of users worldwide. Whether you're a freelancer, entrepreneur, or established enterprise, Wix provides the tools and support needed to succeed online. Join the Wix community today and elevate your brand's online presence with ease and confidence.</p>
            </div>

            <div className="w-full md:w-[30%] mb-4 mt-10">
                <img src={investor} alt="investor" className="w-full mb-4 md:mb-0 md:w-auto" />
                <h2 className="text-2xl font-bold mb-5 mt-10">Investor Relations</h2>
                <p className="text-gray-800">Wix presents a smart investment opportunity for individuals and businesses seeking to establish a strong online presence. With its affordable pricing plans and robust features, Wix offers exceptional value for money. From customizable templates to powerful marketing tools, Wix provides everything needed to build and grow your online presence effectively.</p>
            </div>
        </div>



    </div>
  );
};

export default Content;