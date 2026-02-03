import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  text: string;
  onPress?: () => void;
  variant?: "pink" | "white";
}

const Button = ({ text, onPress, variant = "pink" }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        variant === "pink" ? styles.btnPink : styles.btnWhite,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 310,
    height: 48,
    borderRadius: 40,
    paddingVertical: 16,
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 15,
  },
  btnPink: {
    backgroundColor: "#FCC0C5",
  },
  btnWhite: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#8B5CF6",
  },
  btnText: {
    fontSize: 16,
    color: "#000000",
    fontWeight: 600,
    // Lägg till font
  },
});

export default Button;
