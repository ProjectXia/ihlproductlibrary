import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Header } from "../../components/header";

function DashBoard() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header />
      <View style={{ flexDirection: "column", padding: 10 }}>
        <Text style={{ color: "#227C70", fontSize: 18, fontWeight: "600" }}>
          Favourite Products Listing ...
        </Text>
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <ScrollView horizontal={true}>
            <ImageBackground
              style={{
                width: 100,
                height: 50,
                backgroundColor: "#227C70",
                borderRadius: 30,
                marginHorizontal: 5,
              }}
            ></ImageBackground>
            <ImageBackground
              style={{
                width: 100,
                height: 50,
                backgroundColor: "orange",
                borderRadius: 30,
                marginHorizontal: 5,
              }}
            ></ImageBackground>
            <ImageBackground
              style={{
                width: 100,
                height: 50,
                backgroundColor: "#E6E2C3",
                borderRadius: 30,
                marginHorizontal: 5,
              }}
            ></ImageBackground>
            <ImageBackground
              style={{
                width: 100,
                height: 50,
                backgroundColor: "#88A47C",
                borderRadius: 30,
                marginHorizontal: 5,
              }}
            ></ImageBackground>
            <ImageBackground
              style={{
                width: 100,
                height: 50,
                backgroundColor: "#E6E2C3",
                borderRadius: 30,
                marginHorizontal: 5,
              }}
            ></ImageBackground>
            <ImageBackground
              style={{
                width: 100,
                height: 50,
                backgroundColor: "#1C315E",
                borderRadius: 30,
                marginHorizontal: 5,
              }}
            ></ImageBackground>
            <ImageBackground
              style={{
                width: 100,
                height: 50,
                backgroundColor: "#E6E2C3",
                borderRadius: 30,
                marginHorizontal: 5,
              }}
            ></ImageBackground>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export { DashBoard };
