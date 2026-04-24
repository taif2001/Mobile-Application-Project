import React from 'react';
import { Text, View } from 'react-native';
import { ActionButton, HeaderTitle, ScreenShell, uiStyles } from '../components/UI';

export function ChooseImageScreen() {
  return (
    <ScreenShell>
      <HeaderTitle title={'Choose how to add\nyour photo'} rightIcon="⚙︎" />
      <View style={uiStyles.homeButtons}>
        <ActionButton
          label="Open Camera"
          style={uiStyles.wideButton}
          rightAdornment={<Text style={uiStyles.emojiIcon}>📷</Text>}
        />
        <ActionButton
          label={'Upload from\nGallery'}
          variant="secondary"
          style={uiStyles.wideButton}
          rightAdornment={<Text style={uiStyles.emojiIcon}>🖼️</Text>}
        />
      </View>
    </ScreenShell>
  );
}
