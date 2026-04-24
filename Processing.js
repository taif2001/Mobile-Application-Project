import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";

export default function Processing({ navigation, route }) {
  const imageUri = route?.params?.imageUri;

  useEffect(() => {
    const timer = setTimeout(() => {
      const results = ["warmResult", "coolResult", "neutralResult"];
      const randomResult = results[Math.floor(Math.random() * results.length)];

      navigation.replace(randomResult, { imageUri });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Analyzing your{"\n"}color</Text>

      <View style={styles.imageBox}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Image
            source={require("./assets/previewFace.png")}
            style={styles.image}
          />
        )}

        <View style={styles.line} />

        <View style={styles.loadingCircle}>
          <ActivityIndicator size="large" color="#F6E8DD" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6DCCB",
    alignItems: "center",
    paddingTop: 45,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#6B3518",
    textAlign: "center",
    marginTop: 85,
    marginBottom: 85,
    lineHeight: 45,
    fontFamily: "serif",
  },

  imageBox: {
    width: 300,
    height: 300,
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  line: {
    position: "absolute",
    width: 2,
    height: "100%",
    backgroundColor: "white",
    left: "50%",
    opacity: 0.9,
  },

  loadingCircle: {
    position: "absolute",
    top: 85,
    left: 85,
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 12,
    borderColor: "rgba(255,255,255,0.65)",
    justifyContent: "center",
    alignItems: "center",
  },
});