import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function InvalidImageScreen({ navigation, route }) {
  const reason =
    route?.params?.analysis?.reason ||
    'Please choose a clear front-facing face photo in natural light.';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconCircle}>
        <Ionicons name="alert-circle-outline" size={82} color="#7A4A30" />
      </View>

      <Text style={styles.title}>Photo not accepted</Text>
      <Text style={styles.description}>{reason}</Text>
      <Text style={styles.tip}>
        Use a close face photo with both cheeks visible, no heavy shadow, and no objects or text.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('ChooseImage')}>
        <Text style={styles.buttonText}>Choose another photo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6DCCB',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  iconCircle: {
    width: 132,
    height: 132,
    borderRadius: 66,
    backgroundColor: '#F4E1D8',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },
  title: {
    fontSize: 30,
    lineHeight: 38,
    fontWeight: '700',
    color: '#6B3518',
    textAlign: 'center',
    fontFamily: 'serif',
    marginBottom: 16,
  },
  description: {
    fontSize: 19,
    lineHeight: 27,
    fontWeight: '700',
    color: '#3A2A22',
    textAlign: 'center',
    fontFamily: 'serif',
    marginBottom: 12,
  },
  tip: {
    fontSize: 16,
    lineHeight: 23,
    color: '#6B3E2E',
    textAlign: 'center',
    fontFamily: 'serif',
    marginBottom: 34,
  },
  button: {
    minHeight: 58,
    borderRadius: 29,
    borderWidth: 3,
    borderColor: '#7A4A30',
    backgroundColor: '#F4E1D8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 22,
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '700',
    color: '#111',
    textAlign: 'center',
    fontFamily: 'serif',
  },
});
