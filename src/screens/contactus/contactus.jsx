import { View, Text, Image } from "react-native";
import { TextInput, Button, Appbar, Chip } from "react-native-paper";
import MenuTop from "../../components/menutop";
import { useState, useEffect } from "react";

function ContactUs({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModall = () => {
    setListName("");
    setModalVisible(!isModalVisible);
  };
  const signOutME = () => {
    clearUserSession("", "false");
    navigation.replace("Splash");
  };
  const aboutME = () => {
    navigation.navigate("Aboutus");
  };
  const contactME = () => {
    navigation.navigate("Contactus");
  };
  const MyHeader = () => {
    return (
      <Appbar.Header mode="small" style={{ backgroundColor: "#F1F6F5" }}>
        <Appbar.Content title="Contact Us" />
        <MenuTop
          viewadd={<Appbar.Action icon="dots-vertical" />}
          newAdd={toggleModall}
          signOUT={signOutME}
          aboutus={aboutME}
          contactus={contactME}
        />
      </Appbar.Header>
    );
  };

  return (
    <View style={{ alignContent: "center", justifyContent: "center" }}>
      <MyHeader />
      <Image
        source={require("../../../assets/contact_img.jpeg")}
        style={{
          width: "100%",
          height: 300,
          marginTop: 10,
        }}
      />
      <Text
        style={{
          position: "absolute",
          left: 20,
          top: 330,
          fontWeight: "900",
          color: "white",
          fontSize: 20,
        }}
      >
        Indus Home Limited
      </Text>
      <View style={{ paddingHorizontal: 10 }}>
        <Chip
          icon="information"
          onPress={() => console.log("")}
          style={{ marginVertical: 10 }}
        >
          Head Office
        </Chip>

        <Text style={{ fontSize: 16, alignSelf: "center" }}>
          174-Abubakar Block, New Garden Town, Lahore, Pakistan.
        </Text>
        <Chip
          icon="information"
          onPress={() => console.log("")}
          style={{ marginVertical: 10 }}
        >
          Plant
        </Chip>
        <Text style={{ fontSize: 16, alignSelf: "center" }}>
          2.5 Km Off Manga Raiwind Road, Manga Mandi Lahore, Pakistan.
        </Text>
        <Chip
          icon="information"
          onPress={() => console.log("")}
          style={{ marginVertical: 10 }}
        >
          Email Address
        </Chip>
        <Text style={{ fontSize: 16, alignSelf: "center" }}>
          info@indus-home.com
        </Text>
        <Chip
          icon="information"
          onPress={() => console.log("")}
          style={{ marginVertical: 10 }}
        >
          Telephone#
        </Chip>
        <Text style={{ fontSize: 16, alignSelf: "center", fontWeight: "800" }}>
          +92 42-111-404-405
        </Text>
        <Chip
          icon="information"
          onPress={() => console.log("")}
          style={{ marginVertical: 10 }}
        >
          Fax:
        </Chip>
        <Text style={{ fontSize: 16, alignSelf: "center", fontWeight: "800" }}>
          +92 42-35869003
        </Text>
      </View>
    </View>
  );
}
export { ContactUs };
