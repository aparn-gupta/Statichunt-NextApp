"use client"


import React from 'react'
import Link from 'next/link'
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';


const Firstscreen = () => {

    const [menubarShowing, setMenubarShowing] = useState(false)
    const [backgroundImgOne, setBackgroundImgOne] = useState({display : "block"})
    const [backgroundImgTwo, setBackgroundImgTwo] = useState({display : "none"})


    const menubarstyle =  menubarShowing ? {display : "block"}  : {display : "none"}




    const handleClick = () => {
        setMenubarShowing(prev => !prev)

    }

    const forward = () => {
        setBackgroundImgOne({display : "none"})
        setBackgroundImgTwo({display : "block"})

    }

    const backward = () => {
        setBackgroundImgOne({display : "block"})
        setBackgroundImgTwo({display : "none"})

    }


  return (
    <div>
       <div style = {menubarstyle}  className="h-screen w-screen fixed  top-0 left-0 bg-transblack z-50 text-white p-12">  
      
    <div className="flex justify-between lg:ml-24">  <img className="w-28 h-12" src="https://www.prosaicpress.com/jkentauthor/wp-content/uploads/2020/04/random.png" /> <CancelIcon className = "text-white"  sx= {{width: "3.5rem", height: "3.5rem"}} onClick= {handleClick} /> </div>
    <ul className="flex justify-center p-8 uppercase text-lg ">
   <div>
    <li className="mb-3"> <Link href=""> Home</Link> </li>
    <li className="mb-3"> <Link href="/about"> About</Link> </li>
    <li className="mb-3"> <Link href="/services"> Services</Link> </li>
    <li className="mb-3"> <Link href="/portfolio"> Portfolio</Link> </li>
    <li className="mb-3"> <Link href="/blog"> Blog</Link> </li>
    <li className="mb-3"> <Link href="/contact"> Contact</Link> </li>
 
   </div>     
</ul>


<div className="lg:flex lg:justify-between  text-grey mt-4 md:mt-64   lg:mt-32 lg:ml-24">
  <div className="text-center lg:text-left "> 
    <p className="flex justify-center lg:text-left "> Address: 66 Broklyn Street, New Mexico,
      United States of America</p>
    <p className="flex justify-center lg:text-left"> Phone: 88888 88888 </p>
    <p  className="flex justify-center lg:text-left "> Email: random@random.com</p> 
  </div>
  
    <div className="lg:mr-12 flex mt-2 lg:mt-0 justify-center lg:block">   
      <p className="">  <TwitterIcon />   Twitter</p>
     <p className="">  <FacebookIcon />  Facebook</p>
      <p className="">  <InstagramIcon />  Instagram</p>
    </div>
</div>





</div>

<div >    <a href="#top"  className= "">  <div className="fixed right-8 bottom-8 bg-myred p-2 "> <KeyboardDoubleArrowUpIcon className='text-white' />  </div>  </a></div>





  <div className="relative ">   

  

   <div className="  lg-block">
    <button onClick={backward} className=" hidden text-black lg:block absolute top-1/2 left-16 text-4xl z-40 w-20 h-20 bg-transparent font-thin"> &lt; </button>
    <button  onClick={forward} className=" hidden text-black lg:block  absolute top-1/2 right-16 text-4xl z-40  w-20 h-20 bg-transparent font-thin"> &gt; </button>
   </div>



    <img src="https://www.employmentlawhandbook.com/wp-content/uploads/2021/06/two-women-at-work-in-a-workplace.jpg" style = {backgroundImgOne} className="w-screen h-screen grayscale brightness-50 z-40 object-cover"/> 
    <img src= "https://assets.entrepreneur.com/content/3x2/2000/20160603173131-businesswoman-working-desk-workplace.jpeg"  style = {backgroundImgTwo} className="w-screen h-screen grayscale brightness-50  z-40 hidden lg:block object-cover"/> 
    

    
    <div  className=" py-4 px-5  flex justify-between  absolute top-0 left-0 lg:pb-6 lg:pt-10 lg:px-10 border-b-2 border-grey z-40 w-full "> 

      <div>
          <img className="w-28 h-12" src="https://www.prosaicpress.com/jkentauthor/wp-content/uploads/2020/04/random.png" />
      </div>
  
  
      <ul className=" hidden lg:flex lg:uppercase lg:text-white lg:text-lg  ">
      <li className="px-5"> <Link href=""> Home</Link> </li>
    <li className="px-5"> <Link href="/about"> About</Link> </li>
    <li className="px-5"> <Link href="/services"> Services</Link> </li>
    <li className="px-5"> <Link href="/portfolio"> Portfolio</Link> </li>
    <li className="px-5"> <Link href="/blog"> Blog</Link> </li>
    <li className="px-5"> <Link href="/contact"> Contact</Link> </li>    
      </ul>
  
      <div   className="text-white ">
          <SearchIcon  sx={{width: '2.5rem', height: '2.5rem', marginRight: "0.5rem"}} className='text-white' />
          <MenuIcon   sx={{width: '2.5rem', height: '2.5rem'}} className='text-white' onClick= {handleClick} />
      </div>

    </div>




  
  
    <div className = "absolute top-0 flex justify-center w-full lg:py-44 py-80 md:py-96 text-white uppercase ">
      <div className=''>
        <p className="text-2xl text-center tracking-wider"> Welcome to Random agency </p>
      <p className="lg:text-9xl text-5xl font-bold text-center my-5"> Smart Web </p>  
      <p className="lg:text-9xl text-5xl font-bold text-center my-5"> design agency</p>  
      <div className=" flex justify-center mt-12 "> <button  className = "bg-black  text-lg w-52 h-20 uppercase border-r-4 border-white"> Discover More  </button> </div>
      </div>
    </div>

   
  </div>


      
    </div>
  )
}

export default Firstscreen
