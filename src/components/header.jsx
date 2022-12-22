import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Swiper from "react-native-swiper";
import { Ionicons } from "@expo/vector-icons";

const sliderHeight = 200;
const slideHight = 200;

function Header() {
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

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 63,
          backgroundColor: "#1C315E",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            color: "#E6E2C3",
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
          <Ionicons name="settings" size={30} color={"gray"} />
        </ImageBackground>
      </View>
      <Swiper style={styles.wrapper} showsButtons={true} autoplay>
        <ImageBackground
          source={famousTowel[0].towelImage}
          style={styles.slide1}
        >
          <Text style={styles.text}>{famousTowel[0].title}</Text>
        </ImageBackground>

        <ImageBackground
          source={famousTowel[1].towelImage}
          style={styles.slide2}
        >
          <Text style={styles.text}>{famousTowel[1].title}</Text>
        </ImageBackground>

        <ImageBackground
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
    flex: 0.35,
    backgroundColor: "#FFFFFF",
  },
  wrapper: {},
  slide1: {
    height: slideHight,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#227C70",
  },
  slide2: {
    height: slideHight,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#227C70",
  },
  slide3: {
    height: slideHight,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#227C70",
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
