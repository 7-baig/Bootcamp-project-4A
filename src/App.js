import React, { useRef, useState, useEffect } from 'react'
import './App.css'
import bird from './images/birdie.gif'
import bird2 from './images/bird2.gif'
import bird3 from './images/bird3.gif'
import tree from './images/tree.gif'
import useWebAnimations from "@wellyshen/use-web-animations";

function App() {


  const ref = useRef()

  const { ref: birdRef, getAnimation: birdAnimation } = useWebAnimations({
    keyframes: [
      { transform: 'translateX(1000px)' },
      { transform: 'translateX(0)' },
    ],
    timing: {
      duration: 2000,
      iterations: Infinity,
      direction: "normal",
    },
  });

  const { ref: bird2Ref, getAnimation: bird2Animation } = useWebAnimations({
    keyframes: [
      { transform: 'translateX(1000px)' },
      { transform: 'translateX(0)' },
    ],
    timing: {
      duration: 1900,
      iterations: Infinity,
      direction: "normal",
    },
  });

  const { ref: bird3Ref, getAnimation: bird3Animation } = useWebAnimations({
    keyframes: [
      { transform: 'translateX(1000px)' },
      { transform: 'translateX(0)' },
    ],
    timing: {
      duration: 1800,
      iterations: Infinity,
      direction: "normal",
    },
  });

  const { ref: tree1Ref, getAnimation: treeAnimation } = useWebAnimations({
    keyframes: [
      { transform: 'translateX(1000px)' },
      { transform: 'translateX(0)' },
    ],
    timing: {
      duration: 2000,
      iterations: Infinity,
      direction: "normal",
    },
  });
  const { ref: tree2Ref, getAnimation: tree2Animation } = useWebAnimations({
    keyframes: [
      { transform: 'translateX(1000px)' },
      { transform: 'translateX(0px)' },
    ],
    timing: {
      duration: 1900,
      iterations: Infinity,
      direction: "normal",
    },
  });
  const { ref: boyRef, playState, getAnimation: boyAnimation } = useWebAnimations({
    playbackRate: 1,
    keyframes: [
      { backgroundPosition: '0px' },
      { backgroundPosition: '1536px' },
    ],
    timing: {
      duration: 1000,
      easing: 'steps(6)',
      iterations: Infinity,
      direction: "normal",
    },
  });



  useEffect(() => {
    alert('hello')
//  It will slow down the speed of boy until he reaches the playback of 0.5
    let timer = setInterval(() => {
      if (boyAnimation().playbackRate >= 0.4 ) {
        boyAnimation().playbackRate = boyAnimation().playbackRate - .1
        treeAnimation().playbackRate = treeAnimation().playbackRate - .1
        tree2Animation().playbackRate = tree2Animation().playbackRate - .1
        birdAnimation().playbackRate = birdAnimation().playbackRate - .1
        bird2Animation().playbackRate = bird2Animation().playbackRate - .1
        bird3Animation().playbackRate = bird3Animation().playbackRate - .1
      }
      else {
        // clearInterval(timer)
      }
    }, 1000)

  }, [])


// this function will increase the speed of the boy
  const speedUp = () => {
    boyAnimation().playbackRate = boyAnimation().playbackRate + .1
    treeAnimation().playbackRate = treeAnimation().playbackRate + .1
    tree2Animation().playbackRate = tree2Animation().playbackRate + .1
    birdAnimation().playbackRate = birdAnimation().playbackRate + .1
    bird2Animation().playbackRate = bird2Animation().playbackRate + .1
    bird3Animation().playbackRate = bird3Animation().playbackRate + .1
  }

  return (
    <div className="container">

      <div className="bird" ref={birdRef}>
        <img src={bird} alt="bird" />
      </div>
      <div className="bird2" ref={bird2Ref}>
        <img src={bird2} alt="bird" />
      </div>
      <div className="bird3" ref={bird3Ref}>
        <img src={bird3} alt="bird" />
      </div>
      <div className="tree1" ref={tree1Ref}>
        <img src={tree} alt="tree" />
      </div>
      <div className="boy" ref={boyRef} onClick={speedUp}></div>
      <div className="tree2" ref={tree2Ref}>
        <img src={tree} alt="tree" />
      </div>
      <div className="tap">
        <h5>Tap on boy</h5>
      </div>

    </div>
  )
}

export default App
