import React from 'react'
import VDBG from "./assets/vdbg.mp4"

// home components
import NavBar from "./navBar"
import Hero from "./hero"

export default function Home(){
  return (
    <>
    <div className="home_container">
      <video autoPlay loop muted className="vdbg">
        <source  src={VDBG} />
      </video>
        <NavBar/>
        <Hero/>
    </div>
    </>
  )
}
