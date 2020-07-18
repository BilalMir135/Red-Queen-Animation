import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';

const Background = () => {
  const skyAnimation = useWebAnimations({
    keyframes: [{ transform: 'translateX(-490px)' }],
    timing: {
      duration: 4000,
      iterations: Infinity,
    },
  });

  const queenAnimation = useWebAnimations({
    keyframes: [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-100%)' },
    ],
    timing: {
      easing: 'steps(7, end)',
      direction: 'reverse',
      duration: 600,
      playbackRate: 1,
      iterations: Infinity,
    },
  });

  return (
    <div className='container'>
      <div className='sky' ref={skyAnimation.ref}></div>
      <div className='earth'>
        <div id='red-queen-and-alice'>
          <img
            id='red-queen_and_alice_sprite'
            ref={queenAnimation.ref}
            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png'
            alt='red-queen-and-alice'
          />
        </div>
      </div>
    </div>
  );
};

export default Background;
