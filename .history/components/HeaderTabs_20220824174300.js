import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function HeaderTabs() {
  return (
    <View>
      <HeaderButton />
    </View>
  );
}
const HeaderButton = (props) => {
  <View>
    <TouchableOpacity>
      <Text>tab.text</Text>
    </TouchableOpacity>
  </View>;
};
