import React from 'react';
import { ProfileScreen } from '../components/UI';

export function ColorProfileWarmScreen() {
  return (
    <ProfileScreen
      swatches={['#D48C71', '#FCE2D4', '#6A8F71', '#CC84E5', '#C9151B', '#D88488']}
      foundation={['Neutral Beige', 'Balanced Base', 'Natural']}
      blush={['Soft Peach', 'Pink Beige']}
      lipstick={['Nude Rose', 'Soft Pink', 'Classic Red', 'Warm Pink']}
    />
  );
}
