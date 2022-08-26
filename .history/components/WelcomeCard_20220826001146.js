import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Fonts, Colors, Images } from "../contants";

const WelcomeCard = ({ title, content, image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} />
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WelcomeCard;
