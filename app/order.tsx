import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Order() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧾 Your Orders</Text>

      <View style={styles.orderCard}>
        <Text style={styles.orderText}>Burger x1</Text>
      </View>

      <View style={styles.orderCard}>
        <Text style={styles.orderText}>Pizza x2</Text>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push("/")}
      >
        <Text style={styles.backText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fffaf0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 20,
  },
  orderCard: {
    backgroundColor: "#e6f7ff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  orderText: {
    fontSize: 18,
  },
  backButton: {
    backgroundColor: "#4682b4",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  backText: {
    color: "#fff",
    fontWeight: "bold",
  },
});