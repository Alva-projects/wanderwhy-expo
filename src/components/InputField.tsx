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
  characterCounter: {
    fontSize: 13,
    color: "#3C3C4399",
    marginTop: 5,
    textAlign: "right",
    fontFamily: "Montserrat_400Regular",
  },
  container: {
    marginVertical: 10,
  },
  input: {
    alignSelf: "center",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#8B5CF6",
    color: "black",
    fontSize: 16,
    fontFamily: "System",
    backgroundColor: "white",
    width: 354,
  },
  inputShort: {
    width: 310,
    height: 48,
    textAlign: "center",
    fontWeight: 600,
  },
  inputLong: {
    maxWidth: "100%",
    height: 150,
    borderRadius: 12,
    textAlignVertical: "top",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default InputField;
