import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import { Ionicons } from "@expo/vector-icons";
import ModalListing from "./modelforlisting";
import { functions } from "firebase";
import { useState } from "react";

const sliderHeight = 200;
const slideHight = 233;

function Header({ onAddPress }) {
  const [showAppbars, setShowAppBars] = useState(false);

  const famousTowel = [
    {
      title: "Brockliee sandwitch",
      towelImage: require("../../assets/header.png"),
    },
    {
      title: "Mash Potatoes",
      towelImage: require("../../assets/header2.jpg"),
    },
    {
      title: "Peas and Carrots",
      towelImage: require("../../assets/header3.jpg"),
    },
  ];
  function toggleAppBar() {
    setShowAppBars(!showAppbars);
  }

  const appbar = () => {
    <View
      style={{
        height: 63,
        backgroundColor: "#227C70",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        overflow: "scroll",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 24,
          fontWeight: "600",
        }}
      >
        Product Listing
      </Text>
      <ImageBackground
        style={{
          width: 50,
          height: 50,
          backgroundColor: "#E6E2C3",
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity onPress={onAddPress}>
          <Ionicons name="add" size={40} color={"#1C315E"} />
        </TouchableOpacity>
      </ImageBackground>
    </View>;
  };
  return (
    <View style={styles.container}>
      {/* {setShowAppBars ? <appbar /> : <View></View>} */}
      <Swiper style={styles.wrapper} showsButtons={false} autoplay>
        <ImageBackground
          resizeMode="stretch"
          source={famousTowel[0].towelImage}
          style={styles.slide1}
        >
          <Text style={styles.text}>{famousTowel[0].title}</Text>
        </ImageBackground>

        <ImageBackground
          resizeMode="stretch"
          source={famousTowel[1].towelImage}
          style={styles.slide2}
        >
          <Text style={styles.text}>{famousTowel[1].title}</Text>
        </ImageBackground>

        <ImageBackground
          resizeMode="stretch"
          source={famousTowel[2].towelImage}
          style={styles.slide3}
        >
          <Text style={styles.text}>{famousTowel[2].title}</Text>
        </ImageBackground>
      </Swiper>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "30%",
    backgroundColor: "#FFFFFF",
  },
  wrapper: {},
  slide1: {
    height: slideHight,
    justifyContent: "center",
    alignItems: "center",
  },
  slide2: {
    height: slideHight,
    justifyContent: "center",
    alignItems: "center",
  },
  slide3: {
    height: slideHight,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    shadowColor: "black",
    shadowRadius: 10,
    shadowOffset: 45,
  },
});
export { Header };
