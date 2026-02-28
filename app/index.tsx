import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import SearchBar from "../components/SearchBar";

export default function Index() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const foodItems = [
    { id: "1", name: "Burger" },
    { id: "2", name: "Pizza" },
    { id: "3", name: "Fried Chicken" },
    { id: "4", name: "Spaghetti" },
  ];

  const filtered = foodItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍔 RAPAL POGI FOOD</Text>

      <SearchBar value={search} onChangeText={setSearch} />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("/modal")}
          >
            <Text style={styles.cardText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.orderButton}
        onPress={() => router.push("/order")}
      >
        <Text style={styles.orderText}>Go to Orders</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 40,
  },
  card: {
    backgroundColor: "#ffe4e1",
    padding: 20,
    borderRadius: 15,
    marginVertical: 8,
  },
  cardText: {
    fontSize: 18,
  },
  orderButton: {
    backgroundColor: "#ff6347",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 15,
  },
  orderText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});