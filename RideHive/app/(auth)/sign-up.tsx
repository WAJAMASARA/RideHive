import React, { useState } from "react";
import { ScrollView, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { images } from "@/constants";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  // Validation function
  const validate = () => {
    const newErrors = { name: "", email: "", password: "" };

    if (!form.name) {
      newErrors.name = "Name is required.";
    }

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

  const onSignUpPress = async () => {
    if (validate()) {
      console.log("Form submitted successfully");
      // Pass 'name' as a query parameter
      router.push(`/(root)/(tabs)/home?name=${form.name}`);
    }
  };

  const onSignInPress = () => {
    router.push("/(auth)/sign-in");
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ position: "relative", width: "100%", height: 250 }}>
        <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text style={{ fontSize: 24, fontWeight: "600", position: "absolute", bottom: 5, left: 5 }}>
            Create Your Account
          </Text>
        </View>

        <View style={{ padding: 20, marginTop: 30 }}>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: errors.name ? "red" : "#ccc",
              padding: 10,
              marginBottom: 10,
              borderRadius: 5,
            }}
            placeholder="Enter your name"
            placeholderTextColor="#A0A0A0"
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          {errors.name ? <Text style={{ color: "red", fontSize: 12, marginBottom: 10 }}>{errors.name}</Text> : null}

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
          {errors.email ? <Text style={{ color: "red", fontSize: 12, marginBottom: 10 }}>{errors.email}</Text> : null}

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
          {errors.password ? <Text style={{ color: "red", fontSize: 12, marginBottom: 10 }}>{errors.password}</Text> : null}

          <TouchableOpacity
            style={{
              backgroundColor: "#0286FF",
              padding: 15,
              borderRadius: 5,
              alignItems: "center",
              marginTop: 20,
            }}
            onPress={onSignUpPress}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Sign Up</Text>
          </TouchableOpacity>

          <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ color: "#666" }}>Already have an account? </Text>
            <Text style={{ color: "#0286FF", fontWeight: "600" }} onPress={onSignInPress}>
              Sign In
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
