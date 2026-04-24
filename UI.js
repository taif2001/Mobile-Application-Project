import React, { useMemo } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputKeyboardTypeOptions,
  View,
  ViewStyle,
} from 'react-native';
import { palette, serifFamily } from '../theme';

export type FieldProps = {
  label: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (value: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: TextInputKeyboardTypeOptions;
};

type ActionButtonProps = {
  label: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary';
  style?: StyleProp<ViewStyle>;
  rightAdornment?: React.ReactNode;
};

type RecommendationCardProps = {
  lines: string[];
  tone: 'deep' | 'mid' | 'accent';
};

export type ColorProfileProps = {
  title?: string;
  swatches: string[];
  foundation: string[];
  blush: string[];
  lipstick: string[];
  confidence?: string;
};

export function ScreenShell({
  children,
  scroll = false,
}: {
  children: React.ReactNode;
  scroll?: boolean;
}) {
  const content = <View style={styles.screenInner}>{children}</View>;

  return (
    <SafeAreaView style={styles.safeArea}>
      {scroll ? (
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {content}
        </ScrollView>
      ) : (
        content
      )}
    </SafeAreaView>
  );
}

export function FormScreenShell({ children }: { children: React.ReactNode }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.keyboardContainer}
    >
      <ScreenShell scroll>{children}</ScreenShell>
    </KeyboardAvoidingView>
  );
}

export function HeaderTitle({
  title,
  rightIcon,
  compact,
}: {
  title: string;
  rightIcon?: string;
  compact?: boolean;
}) {
  return (
    <View style={[styles.headerRow, compact && styles.headerRowCompact]}>
      <Text style={[styles.headerTitle, compact && styles.headerTitleCompact]}>{title}</Text>
      {rightIcon ? <Text style={styles.headerIcon}>{rightIcon}</Text> : null}
    </View>
  );
}

export function ActionButton({
  label,
  onPress,
  variant = 'primary',
  style,
  rightAdornment,
}: ActionButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.actionButton,
        variant === 'secondary' && styles.actionButtonSecondary,
        pressed && styles.buttonPressed,
        style,
      ]}
    >
      <Text style={styles.actionButtonLabel}>{label}</Text>
      {rightAdornment ? <View style={styles.buttonAdornment}>{rightAdornment}</View> : null}
    </Pressable>
  );
}

export function RoundedField({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType = 'default',
}: FieldProps) {
  return (
    <View style={styles.fieldWrap}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="rgba(123, 79, 49, 0.55)"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize="none"
        style={styles.fieldInput}
      />
    </View>
  );
}

export function FormCard({
  children,
  login = false,
}: {
  children: React.ReactNode;
  login?: boolean;
}) {
  return <View style={[styles.formCard, login && styles.formCardLogin]}>{children}</View>;
}

export function ProfileScreen({
  title = 'Your Detailed Color\nProfile',
  swatches,
  foundation,
  blush,
  lipstick,
  confidence = '99.6%',
}: ColorProfileProps) {
  return (
    <ScreenShell scroll>
      <Text style={styles.profileTitle}>{title}</Text>
      <View style={styles.profileCard}>
        <Text style={styles.profileHeading}>Best Colors for You</Text>

        <View style={styles.swatchGrid}>
          {swatches.map((swatch) => (
            <View key={swatch} style={[styles.swatch, { backgroundColor: swatch }]} />
          ))}
        </View>

        <View style={styles.recommendationRowLabels}>
          <Text style={styles.recommendationLabel}>Foundation</Text>
          <Text style={styles.recommendationLabel}>Blush</Text>
          <Text style={styles.recommendationLabel}>Lipstick</Text>
        </View>

        <View style={styles.recommendationRow}>
          <RecommendationCard lines={foundation} tone="deep" />
          <RecommendationCard lines={blush} tone="mid" />
          <RecommendationCard lines={lipstick} tone="accent" />
        </View>

        <View style={styles.confidenceRow}>
          <Text style={styles.confidenceLabel}>Confidence level:</Text>
          <Text style={styles.confidenceValue}>{confidence}</Text>
        </View>

        <ActionButton label="Save my Result" style={styles.saveButton} />
      </View>
    </ScreenShell>
  );
}

function RecommendationCard({ lines, tone }: RecommendationCardProps) {
  const backgroundColor = useMemo(() => {
    switch (tone) {
      case 'deep':
        return palette.cardDeep;
      case 'mid':
        return palette.cardMid;
      default:
        return palette.cardAccent;
    }
  }, [tone]);

  return (
    <View style={[styles.recommendationCard, { backgroundColor }]}>
      {lines.map((line) => (
        <Text key={`${tone}-${line}`} style={styles.recommendationLine}>
          {line}
        </Text>
      ))}
    </View>
  );
}

export const uiStyles = StyleSheet.create({
  homeButtons: {
    flex: 1,
    justifyContent: 'center',
    gap: 36,
    paddingBottom: 48,
  },
  wideButton: {
    minHeight: 126,
  },
  emojiIcon: {
    fontSize: 34,
  },
  inlineLink: {
    alignSelf: 'flex-start',
    color: palette.text,
    fontSize: 21,
    lineHeight: 28,
    fontWeight: '600',
    fontFamily: serifFamily,
    textDecorationLine: 'underline',
    marginTop: 4,
    marginLeft: 12,
  },
  authButtonRight: {
    alignSelf: 'flex-end',
    minHeight: 78,
    width: 170,
    borderRadius: 24,
    marginTop: 'auto',
  },
  settingsButtonRow: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 'auto',
  },
  settingsButton: {
    flex: 1,
    minHeight: 70,
    borderRadius: 24,
  },
});

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.page,
  },
  keyboardContainer: {
    flex: 1,
    backgroundColor: palette.page,
  },
  scrollContent: {
    flexGrow: 1,
  },
  screenInner: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 24,
    backgroundColor: palette.page,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 16,
    marginTop: 12,
  },
  headerRowCompact: {
    justifyContent: 'center',
    marginBottom: 18,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    color: palette.title,
    fontSize: 44,
    lineHeight: 56,
    fontWeight: '700',
    fontFamily: serifFamily,
  },
  headerTitleCompact: {
    fontSize: 34,
    lineHeight: 44,
    paddingHorizontal: 20,
  },
  headerIcon: {
    position: 'absolute',
    right: 0,
    top: 8,
    color: palette.text,
    fontSize: 42,
  },
  actionButton: {
    minHeight: 104,
    borderRadius: 24,
    borderWidth: 3,
    borderColor: palette.border,
    backgroundColor: palette.panel,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  actionButtonSecondary: {
    backgroundColor: palette.button,
  },
  actionButtonLabel: {
    color: palette.text,
    textAlign: 'center',
    fontSize: 34,
    lineHeight: 42,
    fontWeight: '700',
    fontFamily: serifFamily,
  },
  buttonAdornment: {
    position: 'absolute',
    right: 18,
    alignSelf: 'center',
  },
  buttonPressed: {
    opacity: 0.88,
  },
  fieldWrap: {
    marginBottom: 22,
  },
  fieldLabel: {
    color: palette.whiteText,
    fontSize: 30,
    lineHeight: 38,
    fontWeight: '700',
    fontFamily: serifFamily,
    marginBottom: 10,
  },
  fieldInput: {
    height: 58,
    borderRadius: 29,
    borderWidth: 3,
    borderColor: palette.border,
    backgroundColor: palette.page,
    paddingHorizontal: 18,
    color: palette.text,
    fontSize: 20,
    fontFamily: serifFamily,
  },
  formCard: {
    backgroundColor: palette.panel,
    borderTopLeftRadius: 88,
    borderTopRightRadius: 88,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingHorizontal: 22,
    paddingTop: 34,
    paddingBottom: 28,
    minHeight: 640,
  },
  formCardLogin: {
    paddingTop: 90,
    minHeight: 700,
  },
  profileTitle: {
    textAlign: 'center',
    color: palette.title,
    fontSize: 30,
    lineHeight: 40,
    fontWeight: '700',
    fontFamily: serifFamily,
    marginTop: 6,
    marginBottom: 12,
  },
  profileCard: {
    flex: 1,
    backgroundColor: palette.panel,
    borderTopLeftRadius: 92,
    borderTopRightRadius: 92,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 34,
    paddingBottom: 18,
  },
  profileHeading: {
    color: '#000000',
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
    fontFamily: serifFamily,
    marginBottom: 24,
  },
  swatchGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 18,
    marginBottom: 28,
  },
  swatch: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  recommendationRowLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 12,
  },
  recommendationLabel: {
    flex: 1,
    textAlign: 'center',
    color: palette.text,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
    fontFamily: serifFamily,
  },
  recommendationRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 18,
  },
  recommendationCard: {
    flex: 1,
    minHeight: 148,
    borderRadius: 18,
    borderWidth: 3,
    borderColor: palette.border,
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  recommendationLine: {
    color: palette.whiteText,
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '700',
    fontFamily: serifFamily,
  },
  confidenceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20,
  },
  confidenceLabel: {
    color: palette.text,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
    fontFamily: serifFamily,
  },
  confidenceValue: {
    color: palette.green,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
    fontFamily: serifFamily,
  },
  saveButton: {
    minHeight: 78,
    borderRadius: 20,
    backgroundColor: palette.button,
  },
});
