"use client"





import Firstscreen from './navbar'
import SecondComponent from './secondComponent'
import './globals.css'
import ThirdComponent from './ThirdComponent'
import WatchandSubscribe from './WatchandSubscribe'
import Portfolio from './Portfolio'
import Achievements from './Achievemets'
import TrustedbyClient from './TrustedbyClient'

import Clients from './Clients'
import Greatthings from './Greatthings'
import NewsArticles from './NewsArticles'
import Footer from './Footer'
import React from 'react';
import Team from './Team'
import { useState, useEffect } from 'react'

import { Oswald } from 'next/font/google'
 
const oswald = Oswald({ subsets: ['latin'] })



const Home = () => {

  let myPage =   <div className={oswald.className}>
  <div className='bg-black'>
  <Firstscreen />
  <SecondComponent />
  </div>
  <ThirdComponent />
  <WatchandSubscribe />
  <Portfolio />
  <Achievements />
  <TrustedbyClient />
  <Team />  
  <Clients />
  <Greatthings />
  <NewsArticles />
  <Footer />
  
  </div>


  let [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

  }, [])
       




  return (
    <div>
     {isClient ? myPage : myPage }
    
      
    </div>
  );
};

export default Home;






