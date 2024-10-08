import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);


    emailjs.send('service_1liigqb', 'template_pk1sqjs', formData, 'sAH4wWIWjavoQF91o')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
      })
      .catch((err) => {
        console.error('FAILED...', err);
      })
      .finally(() => {
        setLoading(false);
      });
      ;
  };

  return (
    <div className="p-6 bg-secondary shadow-md pt-[100px]">
        <h2 className="text-3xl text-center font-cinzel text-tranceblue font-semibold mb-4">Contact Us</h2>
        <h2 className="text-1xl text-center text-tranceblue font-raleway font-b mb-4">We&apos;d like to hear from you</h2>
    <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 sm:px-[50px] font-raleway'>
    <div className="flex flex-col space-y-4 sm:w-[400px]">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-gray-400" />
                <div className="flex flex-col text-tranceblue">
                  <span className="font-medium text-lg">OUR HEAD OFFICE:</span>
                  <span>40a, Oyibo Adjarho off Ayinde Akinmade, Admiralty Way, 
                    Lekki Phase 1,Lagos.</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-gray-400" />
                <div className="flex flex-col text-tranceblue">
                  <span className="font-medium text-lg">PHONE:</span>
                  <span>+234 916 222 7000</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-gray-400" />
                <div className="flex flex-col text-tranceblue">
                  <span className="font-medium text-lg">EMAIL:</span>
                  <span>info@laciudadglobal.com</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaTwitter />
                </a>
                <a href="https://www.instagram.com/laciudadbuild?igsh=NDJ4bXd0Mzl0MWhw" className="text-gray-400 hover:text-white">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/company/la-ciudad-construction-limited/" className="text-gray-400 hover:text-white">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
      {submitted ? (
        <p className="text-green-600 text-2xl p-[200px] font-raleway">Thank you for your message!</p>
      ) : (
        <form onSubmit={handleSubmit} className='w-full text-tranceblue'>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 bg-gray-300"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 bg-gray-300"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 bg-gray-300"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="w-50 bg-blue-600 text-white px-[30px] py-2 hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
            {loading && <div className="loader absolute top-0 right-0 mt-2 mr-2" />}
          </button>
        </form>
      )}
      </div>
    </div>
  );
};

export default ContactUs;