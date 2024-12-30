import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import useClickStore from "../../../store/useClickStore"; // Import Zustand store

const Rides = () => {
  // Sample ride history data
  const rideHistory = [
    {
      id: "1",
      driverName: "John Doe",
      destination: "Central Park, NY",
      bookedTime: "2024-12-01 14:30",
      totalCost: "$45.00",
    },
    {
      id: "2",
      driverName: "Jane Smith",
      destination: "Times Square, NY",
      bookedTime: "2024-12-03 16:00",
      totalCost: "$30.00",
    },
    {
      id: "3",
      driverName: "Mike Johnson",
      destination: "Brooklyn Bridge, NY",
      bookedTime: "2024-12-05 10:45",
      totalCost: "$25.00",
    },
  ];

  const { clickCount, increment } = useClickStore(); // Access Zustand store to manage the click count

  const handleCardClick = (ride) => {
    increment();
    // Handle card click, you can navigate or show details in an alert/modal
    alert(`Ride Details: ${ride.driverName} to ${ride.destination}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ride History</Text>
      <FlatList
        data={rideHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCardClick(item)} style={styles.card}>
            <Text style={styles.info}>Driver: {item.driverName}</Text>
            <Text style={styles.info}>Destination: {item.destination}</Text>
            <Text style={styles.info}>Booked Time: {item.bookedTime}</Text>
            <Text style={styles.info}>Total Cost: {item.totalCost}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Floating Button */}
      <TouchableOpacity style={styles.floatingButton} >
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
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 15,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
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
    marginBottom: 200,
  },
  floatingButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Rides;
