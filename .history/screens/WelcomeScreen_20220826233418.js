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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default WelcomeScreen;
