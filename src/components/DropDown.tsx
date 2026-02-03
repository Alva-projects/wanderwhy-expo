import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("");

  const handleCategorySelect = (cat: string) => {
    setCategory(cat);
    setIsOpen(false);
  };

  return (
    <View style={[styles.dropdown, isOpen && styles.dropdownOpen]}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text style={styles.headerText}>{category || "Categories"}</Text>
        <Image
          source={require("../../assets/images/arrow.png")}
          style={[styles.arrow, isOpen && styles.arrowUp]}
        />
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.list}>
          {[
            "Category 0",
            "Category 1",
            "Category 2",
            "Category 3",
            "Category 4",
          ].map((cat, index) => (
            <TouchableOpacity
              key={index}
              style={styles.listItem}
              onPress={() => handleCategorySelect(cat)}
            >
              <Text style={styles.listItemText}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 1,
    borderColor: "#8B5CF6",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "white",
  },
  dropdownOpen: {
    // Lägg till extra styling när öppen om du vill
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "400",
  },
  arrow: {
    width: 20,
    height: 20,
  },
  arrowUp: {
    transform: [{ rotate: "180deg" }],
  },
  list: {
    marginTop: 10,
  },
  listItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  listItemText: {
    fontSize: 16,
    textDecorationLine: "underline",
  },
});

export default DropDown;
