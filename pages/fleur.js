import React, { useEffect, useRef, useState } from 'react'
import {useIsomorphicLayoutEffect} from 'react-use';
import { gsap } from 'gsap'

function Fleur() {

    const flowerRef = useRef(null)

    const onEnter = () => {
        gsap.timeline().to(".img", {
            scale: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: "back.out(1.7)"
        })
    
    }
    const onLeave = () => {
        gsap.timeline().to(".img", {
            scale: 0,
            duration: 0.4,
            stagger: {
                each: 0.1,
                from: "end"
            },
          
        })
    }
    
  return (


          <div className="container" >
          <h1>FLOWERS</h1>
              <div ref={flowerRef}>
                <img  src="./ressources/fleur2.png" className=" img img1"/>
                <img  src="./ressources/fleur1.png" className=" img img2" />
                <img  src="./ressources/fleurMilieu.png" className=" img img3" />
                <img  src="./ressources/fleur2.png" className=" img img4" />
                <img  src="./ressources/fleur1.png" className=" img img5" />
              </div>
            <div className="circle"  onMouseEnter={onEnter} onMouseLeave={onLeave} >HOVER</div>
        </div>
   
                    
  )
}

export default Fleur