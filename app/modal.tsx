import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Modal() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽 Food Details</Text>

      <Text style={styles.description}>
        Delicious food made with love. Fresh ingredients and amazing taste!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: "#555",
  },
  button: {
    backgroundColor: "#ff7f50",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});