import React from 'react';
import { ProfileScreen } from '../components/UI';

export function ColorProfileAutumnScreen() {
  return (
    <ProfileScreen
      swatches={['#31593B', '#F2C13B', '#C8742A', '#C69777', '#9C4D12', '#FF8C87']}
      foundation={['Golden', 'Yellow Base', 'Honey', 'Warm Beige']}
      blush={['Apricot', 'Warm Peach', 'Coral']}
      lipstick={['Peach', 'Coral', 'Terracotta', 'Warm Nude', 'Brick Red']}
    />
  );
}
