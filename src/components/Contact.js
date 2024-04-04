import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, such as sending data to a server
    // console.log(formData);
    // console.log("form submitted");
    alert("form submitted")
  };

  return (
    <div className='w-[80%] m-auto' >
        <h1 className='text-2xl font-bold mb-16 mt-16'>Contact Us</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto ">
            <div className="mb-4">
                <label htmlFor="firstName" className="block mb-1">First Name</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block mb-1">Phone</label>
                <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
            </form>
    </div>
   
  );
};

export default Contact;
