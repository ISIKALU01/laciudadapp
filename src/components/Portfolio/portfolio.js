import React, {useState} from 'react';
import Image from 'next/image'
import Navbar from '@/components/home/navigation';
import 'animate.css'

const images = [
  {
    src: '/slowLagosImages (1).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (2).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (3).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (4).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (5).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (6).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (7).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (8).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (9).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (10).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (11).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (12).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (13).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (15).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (16).jpg',
    alt: 'Image 1',
  },
  {
    src: '/slowLagosImages (17).jpg',
    alt: 'Image 1',
  },
 
];



export default function Portfolio() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (index) => {
    setIsLoading(true);
    setSelectedIndex(index);
    setShowModal(true);
  };



const handleClose = (e) => {
    if (e.target === e.currentTarget || e.target.classList.contains('close-button')) {
      setShowModal(false);
    }
  };

  const handleClose2 = () => {
    setShowModal(false);
  };
  
        return (
          <>
          <section className='bg-secondary'>
          <div className="flex w-full h-[350px] overflow-hidden relative mb-[100px]">
          <Image
            src='/dev (1).jpg'
            alt='Image 1'
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-primary/100 opacity-50"></div>
          <div className="absolute inset-0 text-secondary p-4 rounded flex flex-col items-center justify-center">
          <h1 className="text-1xl mx-auto text-center sm:text-4xl font-light text-secondary mb-5 font-cinzel 
               flex justify-center pb-1 mt-[50px]">PORTFOLIO</h1>
            <p className="text-xl sm:text-xl font-cormorant-garamond w-[400px] font-semibold px-4">
              Here are some of our construction projects in Nigeria. 
              Some are complete, while others are still under construction. Take a look!</p>
          </div>
          <Navbar />
          </div>
          

          <div className="container px-[10px] lg:px-[100px] py-8 grid grid-cols-1 gap-8 sm:grid-cols-2 mb-[50px]">

            <div className='relative group'>

              <div className="w-full h-144 sm:h-72 overflow-hidden flex flex-col">
                <Image
                  src="/slowLagosImages (1).jpg"
                  alt="Image 1"
                  width={2000}
                  height={1500}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition 
                  duration-300 ease-in-out"
                />
              </div>

              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black 
              bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out">
                <div className="flex flex-col items-center">
                  <button className="text-black px-4 py-2 hover:bg-primary-200 font-cormorant-garamond text-secondary 
                  transition duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                  onClick={() => setShowModal(true)}
                 >
                  VIEW
                  </button>
                </div>


                {showModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center 
                justify-center z-50 animate__animated animate__fadeIn" onClick={handleClose}>
                  <button className="absolute top-10 right-6 text-white rounded-full p-2 hover:bg-primary
                     transition-colors duration-300 ease-in-out cursor-pointer animate__animated animate__zoomIn"
                     onClick={handleClose2}
                     >
                     <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                     </svg>
                  </button>

                   {/* outer image gallery div */}
                  <div className="bg-white rounded-lg overflow-hidden w-full max-w-5xl relative">

                    {/* image in gallery div */}
                    <div className="relative h-120 overflow-hidden">
                      {isLoading && (
                       <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100">
                         <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-500 border-t-transparent">
                         </div>
                       </div>
                     )}
                     
                     <Image
                        src={images[selectedIndex].src}
                        alt="Gallery"
                        width={2000}
                        height={1500}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
                        onLoadingComplete={() => setIsLoading(false)}
                      />

                      {/* btns on image div */}
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-4">
                          <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors 
                           duration-300 ease-in-out" onClick={(e) => {
                            e.stopPropagation();
                            handleClick((selectedIndex - 1 + images.length) % images.length)
                          }}
                          >
                            <svg
                              className="w-6 h-6 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                              />
                            </svg>
                          </button>
                          <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors 
                           duration-300 ease-in-out"
                           onClick={(e) => {
                            e.stopPropagation();
                            handleClick((selectedIndex - 1 + images.length) % images.length)
                          }}
                          >

                          <svg
                            className="w-6 h-6 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                          </button>
                      </div>

                      {/* image gallery div */}
                    </div>
                      
                   </div>

                </div>

              )}
              
              {/* top level divs */}
            </div>
           </div>


           </div>

          </section>
        </>
        );
      };
