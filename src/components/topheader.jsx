import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

function TopHeader({ listingTitle, onNewPress }) {
  return (
    <View
      style={{
        height: 63,
        backgroundColor: "#227C70",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        overflow: "scroll",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "600",
        }}
      >
        {listingTitle} Gallery
      </Text>
      <ImageBackground
        style={{
          width: 40,
          height: 40,
          backgroundColor: "#E6E2C3",
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity onPress={onNewPress}>
          <Ionicons name="add" size={30} color={"#1C315E"} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export { TopHeader };
