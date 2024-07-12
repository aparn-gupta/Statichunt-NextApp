"use client"



import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import React from "react"

const Clients = () => {


  interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
  }

  function NextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
      onClick={onClick}
    />
  );
}


function PrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}


 var settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  customPaging: () => (
    <div
      style={{
        width: "11px",
        height: "11px",
        background: "grey",
        marginTop: "3rem",
        
       
       
      }}
    >
    
    </div>
  
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 766,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }
    // {
    //   breakpoint: 480,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   }
    // }
  ]
};
    
    
      
   
  return (


   <div>
     <div className="flex justify-center bg-lightgrey lg:pt-24 lg:px-40 px-10 pt-20 md:px-28 md:pt-28 ">
    <div className="">
      <p className="uppercase text-sm my-2 text-center text-grey">OUR CLIENTS</p>
      <p className="lg:text-5xl text-4xl uppercase my-2  text-center">THEY TRUST US</p>
      <p className="my-8  text-grey lg:pr-20 text-lg  text-center lg:px-16"> We are dedicated to delivering exceptional services to our customers and providing top-notch training for our employees.  </p>
    </div>
  </div>





    <div className="lg:px-32 lg:pt-8 pb-48 px-10  md:px-32  bg-lightgrey">
   
     <Slider {...settings}>
      <div>  <img className="w-60   h-52 " src="https://static.vecteezy.com/system/resources/previews/000/176/200/original/vector-abstract-company-logo-template-design-illustration.jpg"/>   </div>
           <div>  <img className="w-60 h-52 " src="https://img.freepik.com/premium-vector/awesome-bird-modern-color-logo-design_153291-51.jpg"/></div>
          <div>   <img className="w-60 h-52 " src="https://img.freepik.com/premium-vector/fox-logo_103224-128.jpg"/></div>
         <div>    <img className="w-60 h-52" src="https://static.vecteezy.com/system/resources/previews/008/213/986/original/colorful-beauty-peacock-logo-design-free-vector.jpg"/></div>
         
         <div>  <img className="w-60  h-52" src="https://static.vecteezy.com/system/resources/previews/000/176/200/original/vector-abstract-company-logo-template-design-illustration.jpg"/>   </div>
           <div>  <img className="w-60 h-52" src="https://img.freepik.com/premium-vector/awesome-bird-modern-color-logo-design_153291-51.jpg"/></div>
          <div>   <img className="w-60 h-52" src="https://img.freepik.com/premium-vector/fox-logo_103224-128.jpg"/></div>
         <div>    <img className="w-60 h-52" src="https://static.vecteezy.com/system/resources/previews/008/213/986/original/colorful-beauty-peacock-logo-design-free-vector.jpg"/></div>
        
    </Slider>
   
      
    </div> 
   </div>
  )
}

export default Clients
