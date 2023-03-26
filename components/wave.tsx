import { FC } from 'react';

import { useCanvasContext } from '../hooks/useCanvas';
import useResponsiveSize from '../hooks/useResponsiveSize';
import WaveObj from '../utils/wave';

const Wave: FC = () => {
  const { context } = useCanvasContext();
  const { width } = useResponsiveSize();
  const height = 500;
  let frequency = 0.0013;
  const waves = {
    frontWave: new WaveObj([-0.0157, 0.014, -0.009], 'rgb(240, 225, 97)'),
    backWave: new WaveObj([0.0122, -0.018, 0.005], 'rgb(255, 243, 140)'),
  };

  const render = () => {
    context?.clearRect(0, 0, width, height);
    Object.entries(waves).forEach(([, wave]) => {
      wave.draw(context!, width, height, frequency);
    });
    frequency += 0.006;
    requestAnimationFrame(render);
  };
  if (context) render();
  return null;
};

export default Wave;
