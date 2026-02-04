import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import Button from "./Button";

type ModalBoxProps = {
  visible: boolean;
  title: string;
  onClose: () => void;
};

const ModalBox = ({ visible, title, onClose }: ModalBoxProps) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.buttonWrapper}>
            <Button text="Back" onPress={onClose} variant="pink" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalBox;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  modal: {
    marginTop: 50,
    width: "90%",
    height: 238,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: "Montserrat_600SemiBold",
  },
  buttonWrapper: {
    width: "100%",
  },
});
