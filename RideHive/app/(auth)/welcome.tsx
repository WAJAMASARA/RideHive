import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";

const Onboarding = () => {
  // Reference to the Swiper component for programmatic navigation
  const swiperRef = useRef<Swiper>(null);

  // State to track the current active slide index
  const [activeIndex, setActiveIndex] = useState(0);

  // Determine if the user is on the last slide
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    // SafeAreaView ensures the content does not overlap with the system's status or navigation bars
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      {/* Skip Button: Navigates to the Sign-Up page */}
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        {/* "Skip" text styled with bold font */}
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      {/* Swiper Component: Displays onboarding slides */}
      <Swiper
        ref={swiperRef} // Attach swiper reference for navigation control
        loop={false} // Disable infinite loop for onboarding
        dot={
          // Styling for inactive dots
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full " />
        }
        activeDot={
          // Styling for the active dot
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)} // Update active index on slide change
      >
        {/* Render each onboarding slide */}
        {onboarding.map((item) => (
          <View
            key={item.id} // Use a unique key for each slide to optimize rendering
            className="flex items-center justify-center p-5"
          >
            {/* Slide image */}
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain" // Maintain aspect ratio of the image
            />
            {/* Slide title */}
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {item.title}
              </Text>
            </View>
            {/* Slide description */}
            <Text className="text-black text-lg font-JakartaSemiBold text-[#858585] mx-10 mt-3 text-center">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>

      {/* Custom Button: Changes behavior based on current slide */}
      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"} // Show "Get Started" on the last slide, "Next" otherwise
        onPress={
          () =>
            isLastSlide
              ? router.replace("/(auth)/sign-up") // Navigate to Sign-Up if on the last slide
              : swiperRef.current?.scrollBy(1) // Move to the next slide otherwise
        }
        className="w-11/12 mt-10"
      />
    </SafeAreaView>
  );
};

export default Onboarding;
