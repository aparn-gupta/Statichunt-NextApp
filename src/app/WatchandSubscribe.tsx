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
        
  







   
  <div className=" relative lg:h-72 h-48 lg:w-screen md:mt-40"  style = {imgStyle}>
   
   
   <div className="flex justify-center absolute -top-16 left-0 w-screen lg:h-138 h-72 ">   <img src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/rZJIMvhmliwmde8a6/videoblocks-group-of-multiethnic-busy-people-working-in-an-office-mixed-race-team-of-young-business-people-working-together_b7fnursum_thumbnail-1080_01.png" className="grayscale w-11/12 lg:w-3/4 absolute md:w-2/3 md:h-72  md:-top-40 lg:-top-16  -top-16 h-52 lg:h-138"/> 
    
    
    <img src="https://icons.veryicon.com/png/o/miscellaneous/food-time/play-video-1.png" className="absolute  w-16 h-16  lg:w-24 lg:h-24 top-4 md:-top-10 bg-myred lg:top-36 " onClick={handleClick} />   
    
    
   
     <p className="absolute lg:top-72 lg:bottom-12 md:top-10 top-20 lg:text-5xl text-4xl uppercase" > Watch Video</p> 
  </div>
  </div>





  <div className=" lg:py-24 flex justify-center  py-1 md:py-8 lg:mt-32 md:mt-0 ">
  <div className="w-4/5 lg:w-3/4 md:w-2/3 lg:flex lg:justify-between">
  <div>
  
  <p className="text-sm text-grey "> DONT MISS OUT OUR LATEST UPDATES</p>     
  <p className="lg:text-5xl text-4xl md:h-16">SUBSCRIBE US</p>  

</div>


<div className="lg:flex z-40 md:block  ">
  <div  className=""> <input type="text" className="lg:w-96 md:w-134  w-80 lg:p-9 p-7   my-8 lg:my-0 text-grey bg-lightgrey border-0 " placeholder="Drop your email here" /></div>
  <button className = "bg-black  text-white text-lg w-52 h-24 uppercase  "   > Subscribe </button>
</div>
  </div>

  
  </div>

      
    </div>
  )
}

export default WatchandSubscribe
