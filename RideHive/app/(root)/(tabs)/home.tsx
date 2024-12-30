import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import useClickStore from "../../../store/useClickStore"; // Import Zustand store

const API_URL = "https://jsonplaceholder.typicode.com/users";

const Home = () => {
  const route = useRoute();
  const { name } = route.params || {};
  const vehicleTypes = ["Sedan", "SUV", "Truck", "Minivan", "Convertible", "Coupe", "Hatchback"];
  const { clickCount, increment } = useClickStore();

  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDriverData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setDrivers(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load driver data.");
        setLoading(false);
      }
    };

    fetchDriverData();
  }, []);

  const handleBook = (driverName) => {
    increment(); // Increment click count in Zustand store
    alert(`Booking request sent to ${driverName}`);
  };

  const renderDriver = ({ item }) => {
    const hourlyRate = (Math.random() * (30 - 15) + 15).toFixed(2);
    const vehicleType = vehicleTypes[Math.floor(Math.random() * vehicleTypes.length)];

    return (
      <View style={styles.driverCard}>
        <Text style={styles.driverName}>{item.name}</Text>
        <Text style={styles.driverDetails}>Location: {item.address.city}</Text>
        <Text style={styles.driverDetails}>Hourly Rate: ${hourlyRate}</Text>
        <Text style={styles.driverDetails}>Vehicle: {vehicleType}</Text>

        <TouchableOpacity style={styles.bookButton} onPress={() => handleBook(item.name)}>
          <Text style={styles.bookButtonText}>Book</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {name}!</Text>
      <Text style={styles.availableDriversText}>Available Drivers:</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={drivers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderDriver}
        />
      )}

      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.floatingButtonText}>{clickCount}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  availableDriversText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  driverCard: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  driverName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  driverDetails: {
    fontSize: 16,
    color: "#555",
    marginBottom: 6,
  },
  bookButton: {
    position: "absolute",
    top: 15,
    right: 15,
    backgroundColor: "#28a745",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  bookButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#6200ea",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    marginBottom:200,
  },
  floatingButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Home;
