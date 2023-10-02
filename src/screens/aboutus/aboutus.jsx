import { View, Text } from "react-native";
import { TextInput, Button, Appbar, Chip } from "react-native-paper";
import MenuTop from "../../components/menutop";
import { useState, useEffect } from "react";

function AboutUs({ navigation }) {
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
        <Appbar.Content title="About Indus Home Limited" />
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
    <View>
      <MyHeader />
      <View
        style={{
          alignContent: "center",
          justifyContent: "center",
          paddingHorizontal: 10,
          paddingVertical: 15,
        }}
      >
        <Text>
          Indus Home Limited began its journey in 2006 with aim to be the leader
          in Specialized Yarn & Textile Terry products, it is part of Indus
          Group that has been operating in textile manufacturing since last six
          decades. With an ever-growing customer base around the world, we
          ensure our mills are most technologically advanced and fully automated
          to offer most premium quality of towels/terry products to our esteemed
          customers.
        </Text>
        <Text>
          Product specialization of Indus Home Limited Includes all varieties of
          Dobby, Jacquard towels, Fiber Reactive Printed Beach Towels and terry
          garments. Our world class dyeing processes are based on Reactive and
          VAT & BPR Color dyeing methods.
        </Text>

        <Chip
          icon="information"
          onPress={() => console.log("")}
          style={{ marginVertical: 10 }}
        >
          Vision & Mission
        </Chip>
        <Text style={{ fontSize: 14, fontWeight: "500", color: "#227C70" }}>
          Vision:
        </Text>
        <Text>
          Be the world leader in towel/terry production, while saving the planet
          earth using most advanced ways of reducing CO2 Footprint.{" "}
        </Text>
        <Text style={{ fontSize: 14, fontWeight: "500", color: "#227C70" }}>
          Mission:
        </Text>
        <Text>
          Keep innovating and improvising the quality of our products by having
          State of the Art Technology and ensuring highest levels of Employee
          Satisfaction.
        </Text>
        <Chip
          icon="information"
          onPress={() => console.log("")}
          style={{ marginVertical: 10 }}
        >
          Core Values
        </Chip>
        <View style={{ alignSelf: "center", marginTop: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "900",
                alignSelf: "center",
                color: "#227C70",
              }}
            >
              P
            </Text>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "500",
                alignSelf: "center",
              }}
            >
              eople
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "900",
                alignSelf: "center",
                color: "#227C70",
              }}
            >
              R
            </Text>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "500",
                alignSelf: "center",
              }}
            >
              espect
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "900",
                alignSelf: "center",
                color: "#227C70",
              }}
            >
              I
            </Text>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "500",
                alignSelf: "center",
              }}
            >
              ntegrity
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "900",
                alignSelf: "center",
                color: "#227C70",
              }}
            >
              D
            </Text>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "500",
                alignSelf: "center",
              }}
            >
              iversity
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "900",
                alignSelf: "center",
                color: "#227C70",
              }}
            >
              E
            </Text>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "500",
                alignSelf: "center",
              }}
            >
              xcellence
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
export { AboutUs };
