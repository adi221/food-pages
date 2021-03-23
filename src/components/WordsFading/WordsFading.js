import React, { useState, useEffect } from 'react';
import './WordsFading.scss';
import { animated, useTransition, config } from 'react-spring';

const words = [
  { id: 0, text: 'restaurants' },
  { id: 1, text: 'bars' },
  { id: 2, text: 'coffee' },
];

const WordsFading = () => {
  const [index, setIndex] = useState(0);
  const wordsTransition = useTransition(words[index], span => span.id, {
    config: config.stiff,
    delay: 450,
    duration: 100,
    from: {
      opacity: 0,
      transform: 'translateY(10px)',
      position: 'absolute',
      top: 0,
      left: 0,
      margin: 0,
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
    leave: {
      opacity: 0,
      transform: 'translateY(-10px)',
    },
  });

  useEffect(() => {
    const interval = setInterval(
      () => setIndex(current => (current + 1) % words.length),
      2500
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='fading-words'>
      {wordsTransition.map(({ item, key, props }) => {
        return (
          <animated.span key={key} style={props}>
            {item.text}
          </animated.span>
        );
      })}
    </div>
  );
};

export default WordsFading;
