import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Social = () => {
  return (
    <div className='w-[80%] m-auto' >
        <h1 className="text-2xl font-bold mb-16 mt-16">Social</h1>
        <div className="flex my-5">
            <div className="w-1/5 flex justify-center items-center border border-gray-400">
                {/* <FontAwesomeIcon icon={} className=" my-10 text-4xl text-gray-600" /> */}
                <h3 className=" my-10 md:w-auto md:text-4xl text-gray-600">WiXBlog</h3> 
            </div>
            <div className="w-1/5 flex justify-center items-center border border-gray-400">
                <FontAwesomeIcon icon={faFacebook} className="md:w-auto md:text-4xl text-gray-600" />
            </div>
            <div className="w-1/5 flex justify-center items-center border border-gray-400">
                <FontAwesomeIcon icon={faInstagram} className="md:w-auto md:text-4xl text-gray-600" />
            </div>
            <div className="w-1/5 flex justify-center items-center border border-gray-400">
                <FontAwesomeIcon icon={faYoutube} className="md:w-auto md:text-4xl text-gray-600" />
            </div>
            <div className="w-1/5 flex justify-center items-center border border-gray-400">
                <FontAwesomeIcon icon={faTwitter} className="md:w-auto md:text-4xl text-gray-600" />
            </div>
            </div>
    </div>
  
  );
};

export default Social;
