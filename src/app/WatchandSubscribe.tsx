"use client"
import React, { useState } from "react"


const WatchandSubscribe = () => {

  const [workVideoShowing, setWorkVideoShowing] = useState(false)

  const handleClick = () => {
    setWorkVideoShowing( prev => !prev)
    }


  const workVideo = workVideoShowing ?  <div id="video-container">
  <div className = "flex justify-center"> 
    <iframe className="lg:w-238 lg:h-138 w-96 h-64 md:w-155 md:h-80" src="https://www.youtube.com/embed/btpWt1Cas2I?si=BErrYmErDbwPBVlx" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> 
    <button onClick={handleClick} className="w-6 h-6 text-2xl"> X </button>
  </div>  

</div>   : <div></div>


const imgStyle = workVideoShowing ? {display: "none"} : {display: "block"}
 




  return (
    <div>

      {workVideo}
        
  







   
  <div className=" relative lg:h-72 h-48 lg:w-screen "  style = {imgStyle}>
   
   
   <div className="flex justify-center absolute -top-16 left-0 w-screen lg:h-138 h-72 px-12 lg:px-0 md:px-28 ">   <img src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/rZJIMvhmliwmde8a6/videoblocks-group-of-multiethnic-busy-people-working-in-an-office-mixed-race-team-of-young-business-people-working-together_b7fnursum_thumbnail-1080_01.png" className="grayscale w-5/6  absolute lg:w-2/3  -top-16 -top-8  h-72 lg:h-138"/> 
    
    
    <img src="https://icons.veryicon.com/png/o/miscellaneous/food-time/play-video-1.png" className="absolute  w-16 h-16  lg:w-24 lg:h-24  top-16 bg-myred lg:top-36 " onClick={handleClick} />   
    
    
   
     <p className="absolute lg:top-72 lg:bottom-12 top-36 lg:text-5xl text-4xl uppercase" > Watch Video</p> 
  </div>
  </div>





  <div className="lg:px-32 lg:py-32 lg:flex lg:justify-between px-12 py-12 md:py-8 lg:mt-32 md:mt-16 md:px-28">
   <div>
  
      <p className="text-sm text-grey "> DONT MISS OUT OUR LATEST UPDATES</p>     
      <p className="lg:text-5xl text-4xl md:h-16">SUBSCRIBE US</p>  
  
   </div>

   
    <div className="lg:flex z-40 md:block ">
      <div  className=" flex justify-center md:block lg:block"> <input type="text" className="lg:w-96  w-80 lg:p-9 p-7   my-8 lg:my-0 text-grey bg-lightgrey border-0 " placeholder="Drop your email here" /></div>
      <button className = "bg-black w-36 text-white h-10  text-sm lg:text-lg lg:w-52 lg:h-24  md:h-20 md:w-44 uppercase  "   > Subscribe </button>
    </div>

  
  </div>

      
    </div>
  )
}

export default WatchandSubscribe
