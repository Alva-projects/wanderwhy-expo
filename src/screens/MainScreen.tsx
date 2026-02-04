import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Button from "../components/Button";
import DropDown from "../components/DropDown";
import ModalBox from "../components/ModalOpen";
import WanderForm from "../components/WanderForm";

const MainScreen = () => {
  const router = useRouter();

  const handleBack = () => {
    console.log("Back-btn clicked.");
    router.push("/");
  };

  const handleSubmit = () => {
    console.log("Open it! clicked.");
    setModalVisible(true);
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <WanderForm />
      <DropDown />

      <View style={styles.btnContainer}>
        <Button text="Back" onPress={handleBack} variant="white" />
        <Button text="Open it!" onPress={handleSubmit} variant="pink" />
      </View>
      <ModalBox
        visible={modalVisible}
        title="Hi!"
        onClose={() => setModalVisible(false)}
      />
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
