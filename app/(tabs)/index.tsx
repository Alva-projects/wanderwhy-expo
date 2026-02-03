import { useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import Button from "../../src/components/Button";

export default function WelcomeScreen() {
  const scaleAnim = useRef(new Animated.Value(0.98)).current;
  const router = useRouter();

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.02,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.98,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animated.Image
          source={require("../../assets/images/wanderwhy_logo.png")}
          style={[styles.logo, { transform: [{ scale: scaleAnim }] }]}
        />
        <Text style={styles.title}>Welcome Screen</Text>
      </View>

      <Button
        text="I want in"
        onPress={() => {
          console.log("I want in has been clicked!");
          router.push("./main");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 64,
    height: 64,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
