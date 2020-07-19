import React from 'react';
import QueenAlice from './QueenAlice';
import FrontPalm from './FrontPalm';
import FrontRook from './FrontRook';
import BackgroundChessPieces from './BackgroundChessPieces';
import BackgroundChess from './BackgroundChess';

const Animation = () => {
  const playFast = (getAnimation) => {
    document.addEventListener('click', () => {
      const animation = getAnimation();
      animation && animation.updatePlaybackRate(animation.playbackRate * 1.1);
    });
  };

  return (
    <div className='container'>
      <div className='sky'></div>
      <div className='earth'>
        <QueenAlice playFast={playFast} />
        <FrontPalm playFast={playFast} />
        <FrontRook playFast={playFast} />
        <BackgroundChessPieces playFast={playFast} />
        <BackgroundChess playFast={playFast} />
      </div>
    </div>
  );
};

export default Animation;
