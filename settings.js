import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.card}>
        <Text style={styles.label}>First Name</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Last Name</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} keyboardType="email-address" />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} secureTextEntry />

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.cancelBtn}>
            <Text style={styles.btnText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.updateBtn}>
            <Text style={styles.btnText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDE6D3",
    paddingTop: 60,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#6B3E2E",
    marginBottom: 20,
  },
  card: {
    width: "85%",
    backgroundColor: "#E7C3A5",
    borderRadius: 25,
    padding: 20,
  },
  label: {
    color: "#fff",
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#FDE6D3",
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 40,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  cancelBtn: {
    backgroundColor: "#FDE6D3",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 20,
  },
  updateBtn: {
    backgroundColor: "#FDE6D3",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 20,
  },
  btnText: {
    fontWeight: "bold",
  },
});