import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";

// Example mock API endpoint (replace this with your actual API)
const API_URL = "https://jsonplaceholder.typicode.com/users"; // Example API, replace with actual data source

const Home = () => {
  const route = useRoute();
  const { name } = route.params || {}; // Retrieve the 'name' parameter from the route

  // State to hold the fetched driver data
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for API call
  const [error, setError] = useState(null); // Error state for API call

  // Fetch driver data from the API
  useEffect(() => {
    const fetchDriverData = async () => {
      try {
        const response = await fetch(API_URL); // Fetch data from the API
        const data = await response.json();
        
        // Format the data as needed (for the example, we're using a mock response)
        setDrivers(data); 
        setLoading(false);
      } catch (err) {
        setError("Failed to load data.");
        setLoading(false);
      }
    };

    fetchDriverData();
  }, []);

  // Handle the booking action
  const handleBook = (driverName) => {
    alert(`Booking request sent to ${driverName}`);
  };

  // Render driver item
  const renderDriver = ({ item }) => (
    <View style={styles.driverCard}>
      <Text style={styles.driverName}>{item.name}</Text>
      <Text style={styles.driverDetails}>Location: {item.address.city}</Text>
      <Text style={styles.driverDetails}>Hourly Rate: ${Math.random() * (30 - 15) + 15}</Text> {/* Random rate for demo */}
      <Text style={styles.driverDetails}>Vehicle: Sedan</Text> {/* Example vehicle */}
      
      <TouchableOpacity
        style={styles.bookButton}
        onPress={() => handleBook(item.name)} // Handle booking for each driver
      >
        <Text style={styles.bookButtonText}>Book</Text>
      </TouchableOpacity>
    </View>
  );

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
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  availableDriversText: {
    fontSize: 18,
    fontWeight: '600',
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
    elevation: 5, // For Android shadow
    position: "relative", // To position the book button correctly
  },
  driverName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  driverDetails: {
    fontSize: 16,
    color: "#555",
    marginBottom: 6,
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
  bookButton: {
    position: "absolute",
    top: 15,
    right: 15,
    backgroundColor: "#28a745", // Green color for the button
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // For Android shadow
  },
  bookButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
