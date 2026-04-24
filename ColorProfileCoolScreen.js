import React from 'react';
import { ProfileScreen } from '../components/UI';

export function ColorProfileCoolScreen() {
  return (
    <ProfileScreen
      swatches={['#007A64', '#2459BF', '#F476D5', '#C66CE3', '#B10208', '#71656C']}
      foundation={['Pink Base', 'Rosy', 'Cool Beige']}
      blush={['Soft Pink', 'Rose', 'Cool Mauve']}
      lipstick={['Berry', 'Plum', 'Mauve', 'Rose Pink', 'Cherry Red']}
    />
  );
}
