import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function Onboarding2() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4DCCF" />

      <View style={styles.topSection}>
        <Text style={styles.title}>
          Take a photo and let{'\n'}
          TrueTone analyze your{'\n'}
          skin tone to reveal your{'\n'}
          natural undertone
        </Text>
      </View>

      <View style={styles.imageSection}>
        <Image
          source={require('../assets/images/onboarding2.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.button}
        onPress={() => router.push('/onboarding3')}
      >
        <Text style={styles.buttonText}>skip</Text>
      </TouchableOpacity>

      <View style={styles.bottomSection}>
        <View style={styles.dotsWrap}>
          <View style={styles.dot} />
          <View style={styles.dotActive} />
          <View style={styles.dot} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4DCCF',
  },

  topSection: {
    height: height * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.08,
    paddingTop: height * 0.015,
  },

  title: {
    textAlign: 'center',
    color: '#8B4E2E',
    fontSize: width * 0.055,
    lineHeight: width * 0.075,
    fontWeight: '500',
    letterSpacing: 0.2,
  },

  imageSection: {
    width: '100%',
    height: height * 0.56,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  button: {
    position: 'absolute',
    right: width * 0.055,
    bottom: height * 0.12,
    backgroundColor: '#F7EADF',
    minWidth: width * 0.22,
    height: height * 0.05,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
  },

  buttonText: {
    color: '#2F1B14',
    fontSize: width * 0.042,
    fontWeight: '500',
  },

  bottomSection: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: height * 0.035,
  },

  dotsWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: '#D8B29B',
    marginHorizontal: 7,
  },

  dotActive: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: '#C18E6C',
    marginHorizontal: 7,
  },
});