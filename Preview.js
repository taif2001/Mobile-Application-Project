import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Preview({ navigation, route }) {
  const imageUri = route?.params?.imageUri;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.settingsIcon}
        onPress={() => navigation.navigate("settings")}
      >
        <Ionicons name="settings-outline" size={38} color="#3A2A22" />
      </TouchableOpacity>

      <Text style={styles.title}>Preview Your Image</Text>

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
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Processing", { imageUri })}
      >
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Change Image</Text>
      </TouchableOpacity>
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

  settingsIcon: {
    position: "absolute",
    top: 55,
    right: 28,
    zIndex: 10,
  },

  title: {
    fontSize: 33,
    fontWeight: "bold",
    color: "#6B3518",
    marginTop: 65,
    marginBottom: 90,
    fontFamily: "serif",
  },

  imageBox: {
    width: 300,
    height: 300,
    position: "relative",
    marginBottom: 38,
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

  button: {
    width: 260,
    height: 52,
    borderWidth: 3,
    borderColor: "#7A4A30",
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 22,
    backgroundColor: "transparent",
  },

  buttonText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
    fontFamily: "serif",
  },
});