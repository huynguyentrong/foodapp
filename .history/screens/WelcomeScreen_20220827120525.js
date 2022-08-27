import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import WelcomeCard from "../components/WelcomeCard";
import { Colors, Fonts, General } from "../contants/";
import Display from "../utils/Display";
const Paginations = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.page} />
      <View style={styles.page} />
      <View style={styles.page} />
    </View>
  );
};
const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" translucent />
      <View style={styles.welcomeListContainer}>
        <FlatList
          data={General.WELCOME_CONTENTS}
          keyExtractor={(item) => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          overScrollMode="never"
          renderItem={({ item }) => <WelcomeCard {...item} />}
        />
      </View>
      <Paginations />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  pageContainer: {
    flexDirection: "row",
  },
  welcomeListContainer: {
    height: Display.setHeight(60),
  },
  page: {
    height: 8,
    width: 15,
    backgroundColor: "green",
    borderRadius: 32,
    marginHorizontal: 5,
  },
});

export default WelcomeScreen;
