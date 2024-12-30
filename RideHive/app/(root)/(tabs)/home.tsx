import React from "react";
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

const Home = () => {
  const route = useRoute(); // Use this to access route parameters
  const { name } = route.params; // Get 'name' parameter from the route

  return (
    <View>
      <Text>Welcome, {name}!</Text>
    </View>
  );
};

export default Home;


