import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
export default function HeaderTabs(props) {
  return (
    <View>
      <TouchableOpacity>
        <Text>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
}
