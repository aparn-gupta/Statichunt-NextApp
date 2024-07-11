import React from 'react'

const Footer = () => {
  return (
    <div className = 'z-40'>
        
  <div className="lg:h-56 lg:px-24 py-44 mt-40  bg-myred  px-16 md:px-28">
    <div className="lg:flex lg:justify-between">
      <p className="lg:text-5xl text-4xl uppercase lg:my-2 mb-8 text-white lg:text-center text-left "> Let&aposs start with your project!</p>
    <button className = "bg-black w-36 text-white h-10 text-sm lg:text-lg lg:w-52 lg:h-16 uppercase md:h-16 md:w-44"> Contact us </button>
    </div>
  </div>





  <div className="lg:flex lg:justify-between bg-black text-white lg:p-40 px-6 py-32 md:flex md:px-28 ">
    <div className="md:mr-16">
      <img src= "https://www.prosaicpress.com/jkentauthor/wp-content/uploads/2020/04/random.png" className="w-28 h-12 mb-8" />
      <p className="w-80 text-grey md:w-52 "> Welcome to our web design agency. Lorem ipsum is simply free text dolor sit amet consectetur adipisicing elit. 
        Tempore corrupti temporibus fuga earum asperiores, alias excepturi sit mpedit fugit laudantium.</p>
    </div>

    <div className="mt-8 lg:mt-0 md:mr-8">
      <p className="uppercase text-2xl mb-8 text-white"> Contact  </p>
      <p  className="text-grey  w-48 md:w-52">  66 Broklyn Street, New Mexico,
        United States of America</p>
      <p className="text-grey  my-4"> Phone: 88888 88888 </p>
      <p className="text-grey "> Email: random@random.com</p> 
    </div>

      <div className="mt-8 lg:mt-0">
        <p className="uppercase text-2xl mb-8 text-white">Social </p>
        <div>  <p className="text-grey "> <i className="fa-brands fa-twitter mr-2"></i>  Twitter</p></div>
        <div>  <p className="text-grey "> <i className="fa-brands fa-facebook mr-2"></i>Facebook</p></div>
        <div> <p className="text-grey "> <i className="fa-brands fa-instagram mr-2"></i> Instagram</p></div>
      </div>

  </div>


  <div className="flex justify-center text-grey border-t-2 border-grey p-10 bg-black uppercase"> <p> Copyright 2024 by labels.com  </p></div>
</div>





  






      
   
  )
}

export default Footer
