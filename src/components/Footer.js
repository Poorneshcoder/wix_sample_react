import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4">
      {/* <div className="container mx-auto w-[80%] m-auto">
        <div className="flex items-center justify-between">
          <div className="text-white">
            <img
              src="/logo.svg"
              alt="logo"
              width={148}
              height={31}
            />
          </div>

          <div className="text-white">
            <p>&copy; 2022 wix.com All rights reserved.</p>
          </div>
        </div>
      </div> */}
      <div className="container mx-auto w-[80%] m-auto">
  <div className="flex flex-col md:flex-row items-center justify-between">
    <div className="text-white mb-4 md:mb-0 md:mr-4">
      <img
        src="/logo.svg"
        alt="logo"
        width={148}
        height={31}
      />
    </div>

    <div className="text-white">
      <p>&copy; 2022 wix.com All rights reserved.</p>
    </div>
  </div>
</div>

    </footer>
  );
};

export default Footer;