import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

function GalleryCard({ imgURI, title, onButtonPress, imageClick }) {
  const LeftContent = () => (
    <Image
      source={require("../../assets/logo.png")}
      style={{ height: 30, width: 30 }}
    />
  );

  return (
    <Card style={{ margin: 5, backgroundColor: "#F1F6F5", width: "47.5%" }}>
      <Card.Title title={title} subtitle="" />
      <TouchableOpacity onPress={imageClick}>
        <Card.Cover source={imgURI} />
      </TouchableOpacity>
      {/* <Paragraph>...</Paragraph> left={LeftContent} */}
      <Card.Actions>
        <Button
          mode="outlined"
          style={{ borderColor: "#227C70" }}
          labelStyle={{ color: "#227C70" }}
          onPress={onButtonPress}
        >
          view detail...
        </Button>
      </Card.Actions>
    </Card>
  );
}

export { GalleryCard };
