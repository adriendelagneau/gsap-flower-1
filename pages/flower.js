import gsap from 'gsap'
import Image from 'next/image'
import React, { useRef } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'

function Flower() {

const refLine = useRef()

const TL = gsap.timeline()

    useIsomorphicLayoutEffect(() => {
       
     
        TL
        .fromTo('.up', {
            x: 0,
            scale: 0,
        }, {
            x: 0,
           scale: 1
        }, )
         
        .fromTo('.h1 span', {
            y: -400,
             display:"inline-block",
            skewX: 30,
            stagger: .05,
        }, {
            y: 0,
            skewX: 0,
            stagger: .05,
            display:"inline-flex",
        },'start' ) 
        .fromTo('.h2 span', {
            y: 400,
            display:"inline-block",
            skewX: 30,
            stagger: .05,
        }, {
            y: 0,
            skewX: 0,
            stagger: .05,   
        }, "start")

        .fromTo('.L', {
            y: -350,
            stagger: .4,
        }, {
            y: 0,
            stagger: .4,   
        })
        .fromTo('.header a', {
            y: -350,
            stagger: .2,
        }, {
            y: 0,
            stagger: .4,   
        }, "start")
        .fromTo('.solink a', {
            x: -150,
            stagger: .4,
        }, {
            x: 0,
            stagger: .4,   
        })
        .fromTo('.paraG p', {
            x: -150,
            opacity: 0
        }, {
            x: 0,
            opacity:1  
        }, '-=0.3')
        .fromTo('.logo', {
            x: -150,
            opacity: 0
        }, {
            x: 0,
            opacity:1  
        }, '-=0.3')
        .fromTo('.Hwrap', {
           
            clipPath: 'circle(0% at 100% 0)'
            
        }, {
          
            clipPath: 'circle(46.5% at 100% 0)'
        },'-=0.3')
        
       
        
    }, [])

  return (
      <div className='container2'>
          
          <header className='header'>
              <div className='logo'>
                  <div className='Lround'></div>
              </div>
              <nav>
                  <ul>
                      <li><a href="#" alt="">Blog</a></li>
                      <li><a href="#" alt="">Home</a></li>
                      <li><a href="#" alt="">Buy</a></li>
                  </ul>
              </nav>
              <div className='HIcon'>
                  <div className='Hwrap'>
                      <img src="https://res.cloudinary.com/dos8mey8r/image/upload/v1670922356/flower/icons8-circled-menu-50_juvx10.png" alt="uiuui" className='hwrapImg'  />
                  </div>
              </div>
          </header>

          <div className='Fcontainer'>
              
              <div className='sideline'>
                  <div className='line' >
                      <div className='L lone'><span></span></div>
                      <div className='L ltwo'><span></span></div>
                      <div className='L lthree'><span></span></div>
                  </div>
              </div>

              <div className='heading'>
                  <div className='up'>
                      <div className='Htag'>
                          <h1 className='h1'>
                              <span>P</span>
                              <span>L</span>
                              <span>U</span>
                              <span>M</span>
                              <span>E</span>
                              <span>R</span>
                          
                              <span>A</span>
                          </h1>
                          <h1 className='h2'>
                              <span>F</span>
                              <span>L</span>
                              <span>O</span>
                              <span>W</span>
                              <span>E</span>
                              <span>R</span>
                              <span>S</span>
                          </h1>
                      </div>
                  </div>

                  <div className='down'>
                      <div className='social'>
                          <div className='solink'>
                              <ul>
                                  <li><a href="#">FaceBook</a></li>
                                  <li><a href="#">Twitter</a></li>
                                  <li><a href="#">Instagram</a></li>
                              </ul>
                          </div>
                          </div>
                          <div className='paraG'>
                              <p>loremEx cillum mollit sunt in cillum. Fugiat ullamco consequat sint velit eiusmod aliquip enim velit enim sint aliquip. Deserunt ea cillum commodo fugiat cillum Lorem anim nisi reprehenderit sunt anim quis culpa in.</p>
                          </div>
                      </div>
                  </div>
              
        </div>

    </div>
  )
}

export default Flower

 /*
            .from(".up", {
                scale: 0,
                x: 0,
                duration: 1
            })
            .from('.h1 span', {
                y: -300,
               
                skewX: 30,  
                stragger: .1,
            },)
            .from('.h2 span', {
                y: 300,
               
            
             display: 'inlin  e-block',    skewX: 30,
                stragger: .1, "start",
            })
           
            .from('.header a', {
                y: -350,
   
                 stagger: .4
            }, "start")
          
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