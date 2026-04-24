import React from 'react';
import { View } from 'react-native';
import { ActionButton, HeaderTitle, ScreenShell, uiStyles } from '../components/UI';

export function HomeScreen() {
  return (
    <ScreenShell>
      <HeaderTitle title="Welcome" rightIcon="⚙︎" />
      <View style={uiStyles.homeButtons}>
        <ActionButton label="Start Analysis" />
        <ActionButton label="History" variant="secondary" />
      </View>
    </ScreenShell>
  );
}
