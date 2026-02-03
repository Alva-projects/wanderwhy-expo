import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Button from "../components/Button";
import DropDown from "../components/DropDown";
import WanderForm from "../components/WanderForm";

const MainScreen = () => {
  const router = useRouter();

  const handleBack = () => {
    console.log("Back-btn clicked.");
    router.push("/");
  };

  const handleSubmit = () => {
    console.log("Open it! clicked.");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <WanderForm />
      <DropDown />

      <View style={styles.btnContainer}>
        <Button text="Back" onPress={handleBack} variant="white" />
        <Button text="Open it!" onPress={handleSubmit} variant="pink" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  btnContainer: {
    marginTop: 20,
    gap: 16,
    width: "100%",
    alignItems: "center",
  },
});

export default MainScreen;
