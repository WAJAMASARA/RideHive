import React, { useState } from "react";
import { Text, TextInput, View, Button, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const Profile = () => {
  // State to hold user profile data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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
          placeholder="Change FirstName" // Placeholder text
          placeholderTextColor="#888" // Set placeholder text color to gray
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
            backgroundColor: "#f5f5f5", // Gray background color
          }}
          placeholder="Change LastName" // Placeholder text
          placeholderTextColor="#888" // Set placeholder text color to gray
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
            backgroundColor: "#f5f5f5", // Gray background color
          }}
          placeholder="Change Email" // Placeholder text
          placeholderTextColor="#888" // Set placeholder text color to gray
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
            backgroundColor: "#f5f5f5", // Gray background color
          }}
          placeholder="Add Phone Number" // Placeholder text
          placeholderTextColor="#888" // Set placeholder text color to gray
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </View>

      {/* Save Profile Changes */}
      <Button title="Save Changes" onPress={() => Alert.alert("Profile Saved!")} />

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
    </SafeAreaView>
  );
};

export default Profile;
