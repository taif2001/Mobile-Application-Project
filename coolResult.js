import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function CoolResult() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7D9C8" />

      <View style={styles.wrapper}>
        {/* Header */}
        <Text style={styles.header}>Your Results</Text>

        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.title}>
            You Have a Cool{'\n'}Undertone
          </Text>

          <Text style={styles.description}>
            Your skin carries pink, red, or bluish tones underneath.
            Cool shades complement your complexion and give you a
            fresh, elegant appearance.
          </Text>

          {/* Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/colorAnalysis')}
          >
            <Text style={styles.buttonText}>
              Get Detailed{'\n'}Color analysis
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7D9C8',
  },

  wrapper: {
    flex: 1,
    paddingTop: 52,
  },

  header: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '700',
    color: '#5A3825',
    marginBottom: 36,
    fontFamily: 'serif',
  },

  card: {
    flex: 1,
    backgroundColor: '#E6BFA4',
    borderTopLeftRadius: 78,
    borderTopRightRadius: 78,
    paddingHorizontal: 26,
    paddingTop: 34,
    paddingBottom: 42,
    marginHorizontal: 1,
  },

  title: {
    fontSize: 23,
    fontWeight: '700',
    color: '#111',
    lineHeight: 31,
    marginBottom: 28,
    fontFamily: 'serif',
  },

  description: {
    fontSize: 18,
    fontWeight: '700',
    color: '#5A3825',
    lineHeight: 24,
    fontFamily: 'serif',
  },

  button: {
    marginTop: 'auto',
    alignSelf: 'center',
    backgroundColor: '#F4E1D8',
    width: 205,
    height: 68,
    borderRadius: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 19,
    fontWeight: '700',
    textAlign: 'center',
    color: '#111',
    lineHeight: 23,
    fontFamily: 'serif',
  },
});