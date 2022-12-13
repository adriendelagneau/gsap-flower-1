import React, { useLayoutEffect, useRef } from 'react'
import {useIsomorphicLayoutEffect} from 'react-use';
import { gsap } from 'gsap'

function Title() {

    const comp = useRef();
    const boxRef = useRef();

    useIsomorphicLayoutEffect(() => {
        gsap.to(boxRef.current, {
            scale: 0.8,
            rotate: 360,
            duration: 1.2
    })
      }, []);
    

  return (
      <div>
           <div className="box" ref={boxRef}>Hello</div>
    </div>
  )
}

export default Title