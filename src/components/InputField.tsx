import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface InputFieldProps {
  variant?: "short" | "long";
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
  maxLength?: number;
}

const InputField = ({
  variant = "short",
  placeholder,
  value,
  onChange,
  maxLength,
}: InputFieldProps) => {
  const handleTextChange = (text: string) => {
    if (!maxLength || text.length <= maxLength) {
      onChange(text);
    }
  };

  return (
    <View>
      <TextInput
        style={[
          styles.input,
          variant === "long" ? styles.inputLong : styles.inputShort,
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={handleTextChange}
        multiline={variant === "long"}
        maxLength={maxLength}
        placeholderTextColor="#BDBDBD"
      />
      {maxLength && variant === "long" && (
        <Text style={styles.characterCounter}>
          {value?.length || 0}/{maxLength}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 40,
    fontFamily: "System", // Ändra till din font
    fontSize: 16,
    color: "black",
    backgroundColor: "white",
  },
  inputShort: {
    width: 310,
    height: 48,
    paddingHorizontal: 16,
    textAlign: "center",
  },
  inputLong: {
    width: "100%",
    height: 150,
    borderRadius: 15,
    padding: 12,
    textAlignVertical: "top",
  },
  characterCounter: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
    textAlign: "right",
  },
  container: {
    marginVertical: 10,
  },
  input: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#8B5CF6",
    color: "black",
    fontSize: 16,
    fontFamily: "System", // Lägg till font
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  inputShort: {
    width: 310,
    height: 48,
    textAlign: "center",
  },
  inputLong: {
    width: "100%",
    maxWidth: "100%",
    height: 150,
    borderRadius: 12,
    textAlignVertical: "top",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default InputField;
