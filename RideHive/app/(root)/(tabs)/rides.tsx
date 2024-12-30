import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

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

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ride History</Text>
      <FlatList
        data={rideHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.info}>Driver: {item.driverName}</Text>
            <Text style={styles.info}>Destination: {item.destination}</Text>
            <Text style={styles.info}>Booked Time: {item.bookedTime}</Text>
            <Text style={styles.info}>Total Cost: {item.totalCost}</Text>
          </View>
        )}
      />
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
});

export default Rides;
