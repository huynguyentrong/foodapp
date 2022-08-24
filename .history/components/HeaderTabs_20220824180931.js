import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
export default function HeaderTabs(props) {
  const { tab } = props;
  console.log(tab);
  return (
    <View>
      <TouchableOpacity>
        <Text>{tab.name}</Text>
      </TouchableOpacity>
    </View>
  );
}
