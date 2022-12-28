import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import { Ionicons } from "@expo/vector-icons";

const slideHight = 300;

function MainCard({
  imgURI,
  title,
  onLikesPress,
  likeIconName = "heart-outline",
  likesCount,
}) {
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
    <View style={{ flexDirection: "column", marginVertical: 1, padding: 4 }}>
      <View
        style={{
          flexDirection: "row",
          height: 45,
          backgroundColor: "#439A97",
          alignItems: "center",
          justifyContent: "flex-start",
          marginBottom: 1,
        }}
      >
        <Image
          source={require("../../assets/logo.png")}
          style={{ height: 40, width: 40 }}
        />
        <Text style={styles.text}>{title}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: 300,
          padding: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <Swiper
          style={styles.wrapper}
          showsButtons={false}
          onIndexChanged={(index) => {
            console.log(index);
          }}
        > */}
        <ImageBackground
          resizeMode="contain"
          source={imgURI}
          style={styles.slide1}
        >
          <View
            style={{
              justifyContent: "center",
              alignContent: "flex-end",
              alignSelf: "flex-end",
              flexDirection: "column",
            }}
          >
            <TouchableOpacity onPress={onLikesPress}>
              <Ionicons name={likeIconName} size={30} color="red" />
            </TouchableOpacity>

            <Text style={{ fontSize: 14 }}>{likesCount && "Likes"}</Text>
          </View>
        </ImageBackground>

        {/* <ImageBackground
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
          </ImageBackground> */}
        {/* </Swiper> */}
      </View>
      <View
        style={{
          flexDirection: "row",
          height: 5,
          marginTop: 1,
          backgroundColor: "#678983",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {/* <Ionicons name="heart-outline" size={30} color="#CBEDD5" /> */}
        {/* <Ionicons name="chatbox-outline" size={30} color="#CBEDD5" />
        <Ionicons name="share-outline" size={30} color="#CBEDD5" /> */}
      </View>
    </View>
  );
}

export { MainCard };

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    width: "100%",
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
    fontSize: 20,
    fontWeight: "bold",
    shadowColor: "black",
    shadowRadius: 10,
    paddingHorizontal: 10,
    shadowOffset: 45,
  },
});
