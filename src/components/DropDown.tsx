import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("");

  const animation = useRef(new Animated.Value(0)).current;

  const categories = [
    "Category 0",
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
  ];

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isOpen ? 1 : 0,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [isOpen]);

  const height = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, categories.length * 52],
  });

  const rotate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const handleSelect = (cat: string) => {
    setCategory(cat);
    setIsOpen(false);
  };

  return (
    <LinearGradient
      colors={["#8B5CF6", "#A591EF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradientBorder}
    >
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
            <View key={index} style={styles.listItemWrapper}>
              <TouchableOpacity
                style={styles.listItem}
                onPress={() => handleSelect(cat)}
              >
                <Text style={styles.listItemText}>{cat}</Text>
              </TouchableOpacity>

              <LinearGradient
                colors={["#60588B", "#9B8EC4"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.itemBorder}
              />
            </View>
          ))}
        </Animated.View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBorder: {
    borderRadius: 10,
    marginVertical: 10,
  },
  dropdown: {
    backgroundColor: "white",
    borderRadius: 9,
    margin: 1,
    overflow: "hidden",
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
  listItemWrapper: {
    marginHorizontal: 10,
  },
  listItem: {
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 12,
    backgroundColor: "white",
  },
  itemBorder: {
    height: 1,
    borderRadius: 1,
    marginVertical: 1,
  },
  listItemText: {
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
  },
});

export default DropDown;
