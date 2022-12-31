import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const slideHight = 250;

function MainCard({
  imgURI,
  title,
  onLikesPress,
  likeIconName = "heart-outline",
  //"heart-sharp"
  likesCount = 0,
  onImagePress,
}) {
  const LeftContent = () => (
    <Image
      source={require("../../assets/logo.png")}
      style={{ height: 50, width: 50 }}
    />
  );
  return (
    <Card style={{ margin: 5, backgroundColor: "#F1F6F5" }}>
      <Card.Title
        title="Indus Home Limited"
        subtitle="... innovation & sustainability redefined"
        left={LeftContent}
      />
      <Card.Content>
        <Title>{title}</Title>
      </Card.Content>
      <Card.Cover source={imgURI} />
      {/* <Paragraph>...</Paragraph> */}
      <Card.Actions>
        <Button
          mode="outlined"
          style={{ borderColor: "#227C70" }}
          labelStyle={{ color: "#227C70" }}
          onPress={onImagePress}
        >
          View Gallery...
        </Button>
      </Card.Actions>
    </Card>

    // <View style={{ flexDirection: "column", marginVertical: 1, padding: 4 }}>
    //   <View
    //     style={{
    //       flexDirection: "row",
    //       height: 45,
    //       backgroundColor: "#439A97",
    //       alignItems: "center",
    //       justifyContent: "flex-start",
    //       marginBottom: 1,
    //     }}
    //   >
    //     <Image
    //       source={require("../../assets/logo.png")}
    //       style={{ height: 40, width: 40 }}
    //     />
    //     <Text style={styles.text}>{title}</Text>
    //   </View>
    //   <View
    //     style={{
    //       flexDirection: "row",
    //       height: 250,
    //       padding: 2,
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <TouchableWithoutFeedback
    //       onPress={onImagePress}
    //       style={{ width: "100%" }}
    //     >
    //       <ImageBackground
    //         resizeMode="stretch"
    //         source={imgURI}
    //         style={styles.slide1}
    //       >
    //         <View
    //           style={{
    //             width: 50,
    //             height: 100,
    //             justifyContent: "center",
    //             alignContent: "flex-end",
    //             alignSelf: "flex-end",
    //             flexDirection: "column",
    //           }}
    //         >
    //           <TouchableOpacity
    //             onPress={onLikesPress}
    //             style={{ alignItems: "center" }}
    //           >
    //             <Ionicons name={likeIconName} size={30} color="red" />
    //           </TouchableOpacity>
    //           <Text style={{ fontSize: 14, textAlign: "center" }}>
    //             {likesCount === 0 ? "Likes" : likesCount}
    //           </Text>
    //         </View>
    //       </ImageBackground>
    //     </TouchableWithoutFeedback>
    //   </View>
    //   <View
    //     style={{
    //       flexDirection: "row",
    //       height: 5,
    //       marginTop: 1,
    //       backgroundColor: "#678983",
    //       justifyContent: "space-around",
    //       alignItems: "center",
    //     }}
    //   >
    //     {/* <Ionicons name="heart-outline" size={30} color="#CBEDD5" /> */}
    //     {/* <Ionicons name="chatbox-outline" size={30} color="#CBEDD5" />
    //     <Ionicons name="share-outline" size={30} color="#CBEDD5" /> */}
    //   </View>
    // </View>
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
