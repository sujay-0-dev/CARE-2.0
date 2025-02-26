// import { ThreeDCardDemo } from "./ThreeDCard";

import req_img from "../../assets/community-animate.svg"
import was_img from "../../assets/waste-animate.svg"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const CardsSection = () => {


  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="grid-cols-1">

    <div className="flex justify-center items-center flex-col sm:flex-row gap-2 sm:gap-[10rem] w-[80%] sm:w-full mb-16">
      
      <div className="w-full h-[250px] md:block mb-[150px] ">
          <img
            className="w-full h-[380px]"
            src={req_img}
            alt="Register illustration"
          />
        </div>

      <div data-aos={'fade-left'}>
        <h1 className="font-manrope dark:text-white text-3xl text-gray-900 mb-5 md:text-5xl leading-[50px] text-center sm:text-left sm:text-5xl font-bold text-grey-900">
        If you need assistance <br /> 
          <span className={` font-extrabold text-blue-600`}>
            Care
          </span> <br/>
          makes it   simple  to <br/>request help & offer.
        </h1>
        {/* <p className="sm:max-w-lg md:text-base mt-8  text-center sm:text-left text-base font-normal leading-7 text-gray-500">
         
          <span className={` font-extrabold text-blue-600`}>
            Unite
          </span>{" "}
          CLI simplifies API project setup. It lets you create RESTful APIs
          swiftly, supporting various backend tech and DBs. Ideal for devs at
          any level
        </p> */}
      </div>

      {/* <ThreeDCardDemo data-aos={'fade-left'} /> */}
    </div>

    <div className="flex justify-center items-center flex-col sm:flex-row gap-2 sm:gap-[10rem] w-[80%] sm:w-full mb-16">
      
      <div data-aos={'fade-right'}>
        <h1 className="font-manrope dark:text-white text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]text-center sm:text-left sm:text-5xl font-bold text-grey-900">
        If you need E-Waste Trade <br /> 
          <span className={` font-extrabold text-blue-600`}>
            Care
          </span> <br/>
          makes it   simple  to <br/>trade on our MarketPlace.
        </h1>
      </div>
      <div className=" w-full h-[250px] md:block mb-[150px] ">
          <img
            className="w-full  h-[380px]"
            src={was_img}
            alt="Register illustration"
          />
        </div>

    </div>


    </div>
  );
}

export default CardsSection