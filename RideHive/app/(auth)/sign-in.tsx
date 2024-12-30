import React, { useState } from "react";
import { ScrollView, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router"; // Ensure expo-router is used for navigation
import { users } from "../../assets/data/usersData"; // Adjust the import path as needed
import { images } from "@/constants";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  // Validation function for Sign In
  const validate = () => {
    const newErrors = { email: "", password: "" };

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!form.email) {
      newErrors.email = "Email is required.";
    } else if (!emailPattern.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.password) {
      newErrors.password = "Password is required.";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  // Sign In logic
  const onSignInPress = async () => {
    if (validate()) {
      const user = users.find(
        (u) => u.email === form.email && u.password === form.password
      );

      if (user) {
        console.log("Sign In successful");
        // Redirect to home page with the user's name passed as a query parameter
        router.push(`/home?name=${user.name}`); // Passing the user's name to the home page
      } else {
        console.log("Invalid email or password");
        setErrors({
          ...errors,
          password: "Invalid email or password", // You can customize error handling here
        });
      }
    }
  };

  // Navigate to Sign Up page
  const onSignUpPress = () => {
    router.push("/(auth)/sign-up");
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ position: "relative", width: "100%", height: 250 }}>
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text style={{ fontSize: 24, fontWeight: "600", position: "absolute", bottom: 5, left: 5 }}>
            Sign In to Your Account
          </Text>
        </View>

        <View style={{ padding: 20, marginTop: 30 }}>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: errors.email ? "red" : "#ccc",
              padding: 10,
              marginBottom: 10,
              borderRadius: 5,
            }}
            placeholder="Enter your Email"
            placeholderTextColor="#A0A0A0"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          {errors.email ? (
            <Text style={{ color: "red", fontSize: 12, marginBottom: 10 }}>{errors.email}</Text>
          ) : null}

          <TextInput
            style={{
              borderWidth: 1,
              borderColor: errors.password ? "red" : "#ccc",
              padding: 10,
              marginBottom: 10,
              borderRadius: 5,
            }}
            placeholder="Enter your Password"
            placeholderTextColor="#A0A0A0"
            secureTextEntry
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          {errors.password ? (
            <Text style={{ color: "red", fontSize: 12, marginBottom: 10 }}>{errors.password}</Text>
          ) : null}

          <TouchableOpacity
            style={{
              backgroundColor: "#0286FF",
              padding: 15,
              borderRadius: 5,
              alignItems: "center",
              marginTop: 20,
            }}
            onPress={onSignInPress}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Sign In</Text>
          </TouchableOpacity>

          {/* Sign Up Link Section */}
          <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ color: "#666" }}>Don't have an account? </Text>
            <Text
              style={{ color: "#0286FF", fontWeight: "600" }}
              onPress={onSignUpPress}
            >
              Sign Up
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
