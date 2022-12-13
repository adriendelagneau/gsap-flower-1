import { useIsomorphicLayoutEffect } from 'react-use';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useRef } from 'react'
import gsap from 'gsap';


gsap.registerPlugin(ScrollTrigger)


function Fire() {

    const refBox = useRef(null)
    const refCt = useRef(null)

    const TL = gsap.timeline({
        scrollTrigger: {
            trigger: ".fireBox2",
            scrub: true,
        }
    })
    useIsomorphicLayoutEffect(() => {
        
        const titi = refCt.current
        TL
            .to(".hillImg2", { y: 10, duration: 3, scrollTrigger: { trigger: titi, scrub: 0.5, }, })
            .to(".hillImg3", { y: 10, duration: 3, scrollTrigger: { trigger: titi, scrub: 0.5, }, })
            .to(".hillImg3", { y: 10, duration: 3, scrollTrigger: { trigger: titi, scrub: 0.5, }, })
            .to(".hillImg4", { y: 20, duration: 3, scrollTrigger: { trigger: titi, scrub: 0.5, }, })
            .to(".hillImg5", { y: -40, duration: 3, scrollTrigger: { trigger: titi, scrub: 0.5, }, })
            .to(".hillImg6", { y: -70, duration: 3, scrollTrigger: { trigger: titi, scrub: 0.5, }, })
            .to(".hillImg7", { y: -120, duration: 3, scrollTrigger: { trigger: titi, scrub: 0.5, }, })
            .to(".hillImg8", { y: -130, duration: 3, scrollTrigger: { trigger: titi, scrub: 0.5, }, })
            .to(".hillImg9", { y: -170, duration: 3, scaleY: 1.2, scrollTrigger: { trigger: titi, scrub: 0.5, }, })
            .to(".fireBox", { height: '20vh', duration: 3, scrollTrigger: { trigger: titi, scrub: 0.5, }, })
        
    }, [])


  return (
      <div className='fireContainer' >
          <div className='fireImg'>
              <div className='titi'>
                  <img src='/firehill/parallax0.png' alt='' className='hillImg1' />
                  <img src='/firehill/parallax1.png' alt='' className='hillImg2' ref={refBox} />
                  <img src='/firehill/parallax2.png' alt='' className='hillImg3' />
                  <img src='/firehill/parallax3.png' alt='' className='hillImg4' />
                  <img src='/firehill/parallax4.png' alt='' className='hillImg5' />
                  <img src='/firehill/parallax5.png' alt='' className='hillImg6' />
                  <img src='/firehill/parallax6.png' alt='' className='hillImg7' />
                  <img src='/firehill/parallax7.png' alt='' className='hillImg8' />
                  <img src='/firehill/parallax8.png' alt='' className='hillImg9' />
                  <div className='fireBox' ></div>
              </div>
          </div>
          <div className='fireBox2' ref={refCt}>
              <h2>thanks</h2>
          </div>
    </div>
  )
}

export default Fire


/**
       .to(".hillImg3", {
                y: 20,
                duration: 2
            }, "start")
            .to(".hillImg4", {
                y: 20,
                duration: 2
            }, "start")
            .to(".hillImg5", {
                y: -40,
                duration: 2
            }, "start")
            .to(".hillImg6", {
                y: -70,
                duration: 2
            }, "start")
            .to(".hillImg7", {
                y: -120,
                duration: 2
            }, "start")
            .to(".hillImg8", {
                y: -130,
                duration: 2
            }, "start")
            .to(".hillImg9", {
                y: -170,
                duration: 2
            }, "start")
            .to(".fireBox", {
                y: '20',
                duration: 2
            }, "start")
 */