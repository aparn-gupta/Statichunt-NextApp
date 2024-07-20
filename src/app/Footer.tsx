import React from 'react'

const Footer = () => {
  return (
    <div className = 'z-40'>
        

 <div className="lg:py-32 py-44 mt-40 md:py-32 flex justify-center bg-myred">
   <div className='lg:w-4/5 w-11/12'>
   <div className="lg:flex lg:justify-between">
      <p className="lg:text-5xl text-4xl uppercase lg:my-2 mb-8 text-white lg:text-center text-left "> Let us start with your project!</p>
    <button className = "bg-black text-white text-lg w-52 h-16 uppercase "> Contact us </button>
    </div>
   </div>
  </div>






  <div className="lg:flex lg:justify-between bg-black text-white lg:p-28 lg:px-44 lg:pr-96 px-6 py-32 md:flex  md:justify-between md:px-20 ">
    <div className="md:mr-16">
      <img src= "https://www.prosaicpress.com/jkentauthor/wp-content/uploads/2020/04/random.png" className="w-28 h-12 mb-8" />
      <p className="w-80 text-grey md:w-52 lg:w-96 text-xl leading-relaxed lg:text-base "> Welcome to our web design agency. Lorem ipsum is simply free text dolor sit amet consectetur adipisicing elit. 
        Tempore corrupti temporibus fuga earum asperiores, alias excepturi sit mpedit fugit laudantium.</p>
    </div>

    <div className="mt-8 lg:mt-0 md:mr-8">
      <p className="uppercase text-xl mb-8 text-white "> Contact  </p>
      <p  className="text-grey  w-48 md:w-52 text-xl leading-relaxed lg:text-base">  66 Broklyn Street, New Mexico,
        United States of America</p>
      <p className="text-grey  my-4 text-xl leading-relaxed lg:text-base"> Phone: 88888 88888 </p>
      <p className="text-grey text-xl leading-relaxed lg:text-base "> Email: random@random.com</p> 
    </div>

      <div className="mt-8 lg:mt-0">
        <p className="uppercase text-xl mb-8 text-white">Social </p>
        <div>  <p className="text-grey text-xl leading-relaxed lg:text-base "> <i className="fa-brands fa-twitter mr-2"></i>  Twitter</p></div>
        <div>  <p className="text-grey text-xl leading-relaxed lg:text-base "> <i className="fa-brands fa-facebook mr-2"></i>Facebook</p></div>
        <div> <p className="text-grey text-xl leading-relaxed lg:text-base "> <i className="fa-brands fa-instagram mr-2"></i> Instagram</p></div>
      </div>

  </div>


  <div className="flex justify-center text-grey border-t-2 border-slate-900 p-10 bg-black uppercase"> <p> Copyright 2024 by labels.com  </p></div>
</div>





  






      
   
  )
}

export default Footer
