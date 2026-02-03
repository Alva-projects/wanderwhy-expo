import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import InputField from "../components/InputField";

const WanderForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Wander Form</Text>

      <InputField
        variant="short"
        placeholder="Enter your name here"
        value={name}
        onChange={setName}
      />

      <View style={styles.descriptionSection}>
        <Text style={styles.descriptionLabel}>Description</Text>
        <InputField
          variant="long"
          placeholder="Tell us more about what's wrong"
          value={description}
          onChange={setDescription}
          maxLength={150}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  descriptionSection: {
    marginTop: 20,
  },
  descriptionLabel: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: "left",
  },
});

export default WanderForm;
