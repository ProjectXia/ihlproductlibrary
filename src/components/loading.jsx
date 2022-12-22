import { View, StyleSheet, Image, Text } from "react-native";
import LottieView from "lottie-react-native";
import { BButton } from "../components/bbutton";

function Loading({ onPressGetStarted }) {
  return (
    <View style={styles.mainCon}>
      <Image
        source={require("../../assets/logo.png")}
        style={{
          width: 120,
          height: 120,
        }}
      />
      <View
        style={{ flexDirection: "column", width: "80%", alignItems: "center" }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "600",
            color: "green",
          }}
        >
          Product Library
        </Text>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "600",
            color: "green",
          }}
        >
          Indus Home Limited
        </Text>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "600",
            color: "green",
          }}
        >
          July 2022
        </Text>
      </View>

      <LottieView
        source={require("../../assets/animations/photos.json")}
        autoPlay
        loop
      />
      <View>
        <BButton
          cmargintop={"90%"}
          cwidth={300}
          title="Get Started!"
          onPressChange={onPressGetStarted}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCon: {
    marginTop: 50,
    width: "100%",
    height: "80%",
    backgroundColor: "white",
    alignItems: "center",
    zIndex: 1,
    position: "absolute",
  },
});

export { Loading };
