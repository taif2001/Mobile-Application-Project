import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { useEffect } from "react";

export default function Splash({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Home"); // أو Login
    }, 4000); // 4 ثواني

    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground
      source={require("../assets/splash.png")}
      style={styles.container}
    >
      <Text style={styles.title}>True{"\n"}Tone</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#F5E6D8",
    fontSize: 42,
    fontWeight: "300",
    textAlign: "center",
    letterSpacing: 2,
  },
});