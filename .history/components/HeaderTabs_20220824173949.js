import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function HeaderTabs(props) {
  const { text } = props;
  return (
    <View>
      <TouchableOpacity>
        <Text>tab.text</Text>
      </TouchableOpacity>
    </View>
  );
}
