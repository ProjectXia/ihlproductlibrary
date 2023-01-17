import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { GalleryCard } from "../../components/gallerycard";
import { Chip } from "react-native-paper";
import { MainCard } from "../../components/maincard";

function ProductDetail({ navigation, route }) {
  const { dataProduct, img } = route.params;

  const LeftContent = () => (
    <Image
      source={require("../../../assets/logo.png")}
      style={{ height: 50, width: 50, marginTop: 27, marginLeft: 32 }}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.25 }}>
        <ImageBackground
          // source={require("../../../assets/back.png")}
          resizeMode={"contain"}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#CBEDD5",
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
        >
          <Image
            source={{ uri: img }}
            resizeMode={"stretch"}
            style={{
              height: 250,
              width: 280,
              borderRadius: 20,
              position: "absolute",
              paddingTop: 280,
              marginTop: 50,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          />
          <LeftContent />
        </ImageBackground>
      </View>
      <View
        style={{
          width: "100%",
          backgroundColor: "#F1F6F5",
          flexDirection: "column",
          position: "absolute",
          marginTop: 330,
          paddingHorizontal: 15,
          marginVertical: 5,
          borderRadius: 20,
        }}
      >
        <Chip
          icon="information"
          style={{ flex: 1, height: 40, marginVertical: 5 }}
        >
          <Text style={{ fontSize: 16, fontWeight: "700", color: "gray" }}>
            Category:{" "}
          </Text>
          <Text style={{ fontSize: 16 }}> {dataProduct.category}</Text>
        </Chip>
        <Chip
          icon="information"
          style={{ flex: 1, height: 40, marginVertical: 5 }}
        >
          <Text style={{ fontSize: 16, fontWeight: "700", color: "gray" }}>
            Pile Yarn:{" "}
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            {" "}
            {dataProduct.pile}
          </Text>
        </Chip>
        <Chip
          icon="information"
          style={{ flex: 1, height: 40, marginVertical: 5 }}
        >
          <Text style={{ fontSize: 16, fontWeight: "700", color: "gray" }}>
            Weight In GSM:{" "}
          </Text>
          <Text style={{ fontSize: 16 }}>{dataProduct.gsm}</Text>
        </Chip>
        <Chip
          icon="information"
          style={{ flex: 1, height: 40, marginVertical: 5 }}
        >
          <Text style={{ fontSize: 16, fontWeight: "700", color: "gray" }}>
            Weight In LBS:{" "}
          </Text>
          <Text style={{ fontSize: 16 }}>{dataProduct.weight}</Text>
        </Chip>
        <Chip
          icon="information"
          style={{ flex: 1, height: 40, marginVertical: 5 }}
        >
          <Text style={{ fontSize: 16, fontWeight: "700", color: "gray" }}>
            Size In CM:{" "}
          </Text>
          <Text style={{ fontSize: 16 }}>{dataProduct.sizeCM}</Text>
        </Chip>
        <Chip
          icon="information"
          style={{ flex: 1, height: 40, marginVertical: 5 }}
        >
          <Text style={{ fontSize: 16, fontWeight: "700", color: "gray" }}>
            Size In INCH:{" "}
          </Text>
          <Text style={{ fontSize: 16 }}>{dataProduct.sizeInch}</Text>
        </Chip>
        <Chip
          icon="information"
          style={{ flex: 1, height: 40, marginVertical: 5 }}
        >
          <Text style={{ fontSize: 16, fontWeight: "700", color: "gray" }}>
            Ref:{" "}
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            {dataProduct.ref}
          </Text>
        </Chip>
        <Chip
          icon="information"
          style={{ flex: 1, height: 80, marginVertical: 5 }}
        >
          <Text style={{ fontSize: 16, fontWeight: "700", color: "gray" }}>
            Remarks:{" "}
          </Text>
          <Text style={{ fontSize: 16 }}>{dataProduct.remarks}</Text>
        </Chip>
      </View>
    </View>
  );
}

export { ProductDetail };
