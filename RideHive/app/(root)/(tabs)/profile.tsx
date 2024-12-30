import React, { useState } from "react";
import { Text, TextInput, View, Button, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import useClickStore from "../../../store/useClickStore"; // Import Zustand store

const Profile = () => {
  // State to hold user profile data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Access Zustand store for click count and increment function
  const { clickCount, increment } = useClickStore();

  // Function to handle logout
  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel" },
        { text: "Yes", onPress: () => router.push("/(auth)/sign-up") }, // Navigate to SignIn screen
      ],
      { cancelable: false }
    );
    increment(); // Increment click count when logout button is clicked
  };

  // Function to handle saving profile changes
  const handleSaveChanges = () => {
    Alert.alert("Profile Saved!");
    increment(); // Increment click count when Save Changes button is clicked
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text className="text-2xl font-JakartaBold mb-20 text-center">Profile</Text>

      {/* Profile Details Section */}
      <View style={{ marginBottom: 30 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>First Name:</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            borderRadius: 8,
            marginBottom: 10,
            backgroundColor: "#f5f5f5", // Gray background color
          }}
          placeholder="Change FirstName"
          placeholderTextColor="#888"
          value={firstName}
          onChangeText={setFirstName}
        />

        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Last Name:</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            borderRadius: 8,
            marginBottom: 10,
            backgroundColor: "#f5f5f5",
          }}
          placeholder="Change LastName"
          placeholderTextColor="#888"
          value={lastName}
          onChangeText={setLastName}
        />

        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Email:</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            borderRadius: 8,
            marginBottom: 10,
            backgroundColor: "#f5f5f5",
          }}
          placeholder="Change Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Phone:</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            borderRadius: 8,
            marginBottom: 10,
            backgroundColor: "#f5f5f5",
          }}
          placeholder="Add Phone Number"
          placeholderTextColor="#888"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </View>

      {/* Save Profile Changes */}
      <Button title="Save Changes" onPress={handleSaveChanges} />

      {/* Logout Button */}
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: "#ff4d4d",
          paddingVertical: 10,
          borderRadius: 8,
          alignItems: "center",
        }}
        onPress={handleLogout}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>Logout</Text>
      </TouchableOpacity>

      {/* Display Click Count */}
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <Text style={{ fontSize: 16, color: "#333" }}>Click Count: {clickCount}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
