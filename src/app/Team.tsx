"use client"



import dynamic from 'next/dynamic';
const Slider = dynamic(() => import('react-slick'), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import React from 'react'

const Team = () => {


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
  slidesToShow: 5,
  slidesToScroll: 3,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  customPaging: () => (
    <div
      style={{
        width: '11px',
        height: '11px',
        background: 'grey',
        marginTop: "3rem",
        
       
       
      }}
    >
    
    </div>
  
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
 };
    
    
      
   
  return (


 





    <div className=" pb-20 lg:pt-20 px-10  lg:px-2 bg-white">
   
     <Slider {...settings}>
      <div className="flex justify-center">  <img src="https://th.bing.com/th/id/OIP.lpdgkVGYFLWN8-Gy__Q8tQAAAA?rs=1&pid=ImgDetMain"  className="lg:w-60 w-80 h-96 lg:h-72 grayscale"/> <p className="text-xl text-center uppercase mt-5 mb-1 font-semibold"> John Hills </p>  <p className="uppercase text-center text-xs font-semibold text-grey"> Marketing Manager </p> </div> 

 <div className="flex justify-center">  <img src="https://cdnb.lystit.com/photos/2012/09/05/sandra-ingrish-raspberry-rose-dolman-sleeve-crinkle-shirt-product-2-4638524-962380068.jpeg"  className="lg:w-60 w-80 h-96 lg:h-72 grayscale"/> <p className="text-xl text-center uppercase mt-5 mb-1 font-semibold"> Maria Jones </p>  <p className="uppercase text-center text-xs font-semibold text-grey"> Brand Designer </p> </div>

 <div className="flex justify-center"> <img src="https://i.pinimg.com/originals/a0/d9/14/a0d9141f5da62b8f45bf5d2ee27bbf80.jpg"   className="lg:w-60 w-80 h-96 lg:h-72 grayscale"/> <p className="text-xl font-semibold text-center uppercase mt-5 mb-1"> Steve McGill </p>  <p className="uppercase text-center text-xs font-semibold text-grey"> Senior Developer </p> </div> 

 <div className="flex justify-center"> <img src="https://findr.fans/cdn/shop/products/Screen_Shot_2019-09-23_at_12.03.00_AM_887x1001.png?v=1569211539"   className="lg:w-60 w-80 h-96 lg:h-72 grayscale"/> <p className="text-xl text-center uppercase mt-5 mb-1 font-semibold"> Trevor Marley </p>  <p className="uppercase text-center text-xs font-semibold text-grey"> Content Manager </p> </div>

 <div className="flex justify-center"> <img src="https://i.pinimg.com/originals/22/91/64/22916445829ff75afa7e5c203143cdd9.jpg"   className="lg:w-60 w-80 h-96 lg:h-72 grayscale"/> <p className="text-xl text-center uppercase mt-5 mb-1 font-semibold"> Paige Smith </p>  <p className="uppercase text-center text-xs font-semibold text-grey "> Lead Engineer </p> </div> 

 <div className="flex justify-center"> <img src="https://th.bing.com/th/id/OIP.lpdgkVGYFLWN8-Gy__Q8tQAAAA?rs=1&pid=ImgDetMain"   className="lg:w-60 w-80 h-96 lg:h-72 grayscale"/> <p className="text-xl text-center uppercase mt-5 mb-1 font-semibold"> John Hills </p>  <p className="uppercase text-center text-xs font-semibold text-grey"> Marketing Manager </p> </div> 

 <div className="flex justify-center"> <img src="https://cdnb.lystit.com/photos/2012/09/05/sandra-ingrish-raspberry-rose-dolman-sleeve-crinkle-shirt-product-2-4638524-962380068.jpeg"  className="lg:w-60 w-80 h-96 lg:h-72 grayscale"/> <p className="text-xl text-center uppercase mt-5 mb-1 font-semibold"> Maria Jones </p>  <p className="uppercase text-center text-xs font-semibold text-grey "> Brand Designer </p> </div>

 <div className="flex justify-center"> <img src="https://i.pinimg.com/originals/a0/d9/14/a0d9141f5da62b8f45bf5d2ee27bbf80.jpg"  className="lg:w-60 w-80 h-96 lg:h-72 grayscale"/> <p className="text-xl text-center uppercase mt-5 mb-1 font-semibold"> Steve McGill </p>  <p className="uppercase text-center text-xs font-semibold text-grey"> Senior Developer </p> </div> 

 <div className="flex justify-center"> <img src="https://findr.fans/cdn/shop/products/Screen_Shot_2019-09-23_at_12.03.00_AM_887x1001.png?v=1569211539"   className="lg:w-60 w-80 h-96 lg:h-72 grayscale"/> <p className="text-xl text-center uppercase mt-5 mb-1 font-semibold"> Trevor Marley </p>  <p className="uppercase text-center text-xs font-semibold text-grey"> Content Manager </p> </div>

 <div className="flex justify-center"> <img src="https://i.pinimg.com/originals/22/91/64/22916445829ff75afa7e5c203143cdd9.jpg"  className="lg:w-60 w-80 h-96 lg:h-72 grayscale"/> <p className="text-xl text-center uppercase mt-5 mb-1 font-semibold"> Paige Smith </p>  <p className="uppercase text-center text-xs font-semibold text-grey"> Lead Engineer </p> </div>     

 <div className="flex justify-center"> <img src="https://cdnb.lystit.com/photos/2012/09/05/sandra-ingrish-raspberry-rose-dolman-sleeve-crinkle-shirt-product-2-4638524-962380068.jpeg"  className="lg:w-60 w-80 h-96 lg:h-72 grayscale"/> <p className="text-xl text-center uppercase mt-5 mb-1 font-semibold"> Maria Jones </p>  <p className="uppercase text-center text-xs font-semibold text-grey "> Brand Designer </p> </div>

<div className="flex justify-center"> <img src="https://i.pinimg.com/originals/a0/d9/14/a0d9141f5da62b8f45bf5d2ee27bbf80.jpg"  className="lg:w-60 w-80 h-96 lg:h-72 grayscale"/> <p className="text-xl text-center uppercase mt-5 mb-1 font-semibold"> Steve McGill </p>  <p className="uppercase text-center text-xs font-semibold text-grey"> Senior Developer </p> </div> 

<div className="flex justify-center"> <img src="https://findr.fans/cdn/shop/products/Screen_Shot_2019-09-23_at_12.03.00_AM_887x1001.png?v=1569211539"   className="lg:w-60 w-80 h-96 lg:h-72 grayscale"/> <p className="text-xl text-center uppercase mt-5 mb-1 font-semibold"> Trevor Marley </p>  <p className="uppercase text-center text-xs font-semibold text-grey"> Content Manager </p> </div>

<div className="flex justify-center"> <img src="https://i.pinimg.com/originals/22/91/64/22916445829ff75afa7e5c203143cdd9.jpg"  className="lg:w-60 w-80 h-96 lg:h-72 grayscale"/> <p className="text-xl text-center uppercase mt-5 mb-1 font-semibold"> Paige Smith </p>  <p className="uppercase text-center text-xs font-semibold text-grey"> Lead Engineer </p> </div>     

        
    </Slider>
   
      
    </div> 
 
  )
}

export default Team

