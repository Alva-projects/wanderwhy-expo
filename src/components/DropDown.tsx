import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("");

  const animation = useRef(new Animated.Value(0)).current; // 0 = stängd, 1 = öppen

  const categories = [
    "Category 0",
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
  ];

  // Animera height och pilrotation
  useEffect(() => {
    Animated.timing(animation, {
      toValue: isOpen ? 1 : 0,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false, // höjd går inte med native driver
    }).start();
  }, [isOpen]);

  // Interpolera höjd (0 → max höjd baserat på antal items)
  const height = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, categories.length * 50], // 50px per item
  });

  // Pilrotation
  const rotate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const handleSelect = (cat: string) => {
    setCategory(cat);
    setIsOpen(false);
  };

  return (
    <View style={styles.dropdown}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text style={styles.headerText}>{category || "Categories"}</Text>
        <Animated.Image
          source={require("../../assets/images/chevron-down.png")}
          style={[styles.arrow, { transform: [{ rotate }] }]}
        />
      </TouchableOpacity>

      <Animated.View style={[styles.list, { height }]}>
        {categories.map((cat, index) => (
          <TouchableOpacity
            key={index}
            style={styles.listItem}
            onPress={() => handleSelect(cat)}
          >
            <Text style={styles.listItemText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 1,
    borderColor: "#8B5CF6",
    borderRadius: 10,
    backgroundColor: "white",
    overflow: "hidden", // viktigt för smooth animation
    marginVertical: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
  headerText: {
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
  },
  arrow: {
    width: 20,
    height: 20,
  },
  list: {
    overflow: "hidden",
  },
  listItem: {
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  listItemText: {
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
  },
});

export default DropDown;
