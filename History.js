import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { useState } from "react";

export default function History() {
  // بتكون فاضية بالبداية
  const [history, setHistory] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>

      <Text style={styles.subTitle}>Past Analysises</Text>

      {history.length === 0 ? (
        <Text style={styles.emptyText}>No past analyses yet</Text>
      ) : (
        <FlatList
          data={history}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.date}>{item.date}</Text>
              <TouchableOpacity>
                <Text style={styles.view}>view</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDE6D3",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#6B3E2E",
    textAlign: "center",
  },
  subTitle: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: "bold",
  },
  emptyText: {
    marginTop: 40,
    textAlign: "center",
    color: "#777",
  },
  card: {
    marginTop: 20,
    backgroundColor: "#FAD1B3",
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: {
    fontWeight: "bold",
  },
  view: {
    textDecorationLine: "underline",
  },
});
