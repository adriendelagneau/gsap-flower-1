import gsap from 'gsap'
import Image from 'next/image'
import React, { useRef } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'

function Test() {

const refTest = useRef()

  

    useIsomorphicLayoutEffect(() => {
        const el = refTest.current
        gsap.timeline().from(el, {scale: 0})
       
   
        
    }, [])

  return (
      <div className='containerTest'>
          <div className='circleTest' ref={refTest}></div>
          
            
    </div>
  )
}

export default Test

 /*
            .from(".up", {
                scale: 0,
                x: 0,
                duration: 1
            })
            .from('.h1 span', {
                y: -300,
                display: 'inline-block',
                skewX: 30,
                stragger: .1,
            },)
            .from('.h2 span', {
                y: 300,
                display: 'inline-block',
                skewX: 30,
                stragger: .1,
            })
           
            .from('.header a', {
                y: -350,
                stagger: .4
            })
          
            .from('.paraG p', {
                y: -150,
                opacity: 0
            }, "-=0.3")
            .from('.logo', {
                y: -150,
                opacity: 0
            }, "-=0.3")
            .from('.Hwrap ', {
                clipPath: 'circle(0.5% at 100% 0)',
            }, "-=0.3")
        */