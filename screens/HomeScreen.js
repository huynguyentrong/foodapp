import React from "react";
import { useState } from "react";
import { View, StyleSheet, Button, Text, Image } from "react-native";
import {
  Avatar,
  Icon,
  Input,
  ListItem,
  Rating,
  SearchBar,
} from "react-native-elements";
import { SliderBox } from "react-native-image-slider-box";

// import { SliderBox } from 'react-native-image-slider-box';
import { ScrollView } from "react-native-virtualized-view";
import HeaderTabs from "../components/HeaderTabs";

const HomeScreen = ({ navigation, route }) => {
  const list = [
    {
      id: 1,
      name: "Dharmik Tank",
      avatar_url: require("../assets/images/pizza-restaurant.jpg"),
      subtitle: "Laravel Devloper",
      rating: 3,
      category: "",
      distance: "3km",
    },
    {
      id: 2,
      name: "Dharmik Tank",
      avatar_url: require("../assets/images/tomato-pasta.jpg"),
      subtitle: "Laravel Devloper",
      rating: 3,
      category: "",
      distance: "3km",
    },
    {
      id: 3,
      name: "Dharmik Tank",
      avatar_url: require("../assets/images/hot-dog-restaurant.jpg"),
      subtitle: "Laravel Devloper",
      rating: 3,
      category: "",
      distance: "3km",
    },
    {
      id: 3,
      name: "Dharmik Tank",
      avatar_url: require("../assets/images/sushi.jpg"),
      subtitle: "Laravel Devloper",
      rating: 3,
      category: "",
      distance: "3km",
    },
  ];
  var images = [
    require("../assets/images/banner1.jpg"),
    require("../assets/images/banner2.jpg"),
    require("../assets/images/banner3.jpg"),
    require("../assets/images/banner4.jpg"),
    require("../assets/images/banner5.jpg"),
  ];
  const [search, setSearch] = useState("");
  return (
    <ScrollView>
      <View style={{ backgroundColor: "white", padding: 10, borderRadius: 20 }}>
        <HeaderTabs name="Delivery" />
        <HeaderTabs name="Pick up" />

        {/* SearchBar */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "80%", padding: 10 }}>
            <Input
              style={{ fontSize: 20 }}
              placeholder="Search for food"
              rightIcon={{ name: "search", type: "font-awesome" }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              marginRight: 15,
            }}
          >
            <Image
              source={require("../assets/icons/trolley.png")}
              style={{ width: 35, height: 35 }}
            />
            <Text
              style={{
                fontSize: 10,
                lineHeight: 20,
                fontWeight: "300",
                color: "white",
                backgroundColor: "red",
                width: 20,
                height: 20,
                borderRadius: 100,
                textAlign: "center",
              }}
            >
              0
            </Text>
          </View>
        </View>

        {/* Banner */}
        <SliderBox
          ImageComponentStyle={{ borderRadius: 15, width: "90%", marginTop: 0 }}
          images={images}
        />
        {/* Category */}

        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 25, fontWeight: "700" }}>Main Category</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View
            style={{
              backgroundColor: "white",
              flexDirection: "column",
              alignItems: "center",
              margin: 10,
              borderRadius: 30,
            }}
          >
            <Image
              source={require("../assets/icons/drink.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text>Drink</Text>
          </View>

          <View
            style={{
              backgroundColor: "white",
              flexDirection: "column",
              alignItems: "center",
              margin: 10,
              borderRadius: 30,
            }}
          >
            <Image
              source={require("../assets/icons/donut.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text>Donut</Text>
          </View>

          <View
            style={{
              backgroundColor: "white",
              flexDirection: "column",
              alignItems: "center",
              margin: 10,
              borderRadius: 30,
            }}
          >
            <Image
              source={require("../assets/icons/hamburger.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text>Hamburger</Text>
          </View>

          <View
            style={{
              backgroundColor: "white",
              flexDirection: "column",
              alignItems: "center",
              margin: 10,
              borderRadius: 30,
            }}
          >
            <Image
              source={require("../assets/icons/noodle.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text>Noodle</Text>
          </View>

          <View
            style={{
              backgroundColor: "white",
              flexDirection: "column",
              alignItems: "center",
              margin: 10,
              borderRadius: 30,
            }}
          >
            <Image
              source={require("../assets/icons/salad.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text>Salad</Text>
          </View>
        </View>
      </View>

      {/* Food List */}
      <View
        style={{ backgroundColor: "white", marginTop: 5, borderRadius: 10 }}
      >
        <Text style={{ fontSize: 18, fontWeight: "400", padding: 15 }}>
          What's delicious around here?
        </Text>

        <View>
          {list.map((l, i) => (
            <ListItem
              onPress={() => navigation.navigate("Details", { id: l.id })}
              key={i}
              bottomDivider
            >
              <Avatar
                size={65}
                avatarStyle={{ borderRadius: 7 }}
                source={l.avatar_url}
              />
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                <ListItem.Subtitle>
                  <Icon
                    name="star"
                    size={15}
                    color={"orange"}
                    type="font-awesome"
                  />
                  <Text style={{ fontSize: 12 }}> ({l.rating})</Text>
                  <Text style={{ fontSize: 12 }}> {l.distance}</Text>
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
