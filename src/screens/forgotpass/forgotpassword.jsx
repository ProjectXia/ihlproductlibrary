import {
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Text,
} from "react-native";
import { BButton } from "../../components/BButton";
import { Header } from "../../components/header";
import { InputBox } from "../../components/input";
import { colors, modifiers } from "../../utils/theme";

export default function ForgotPassword({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        style={{ flex: 1 }}
        source={{
          uri: "https://cdn.pixabay.com/photo/2022/10/18/08/42/desert-7529634_960_720.jpg",
        }}
      >
        <Header title={"Forgot password"} />
        <View style={styles.formCon}>
          <Text
            style={{
              fontSize: 16,
              paddingHorizontal: modifiers.containerPadding,
              marginVertical: modifiers.itemMargin,
            }}
          >
            Please, enter your email address. You will receive a link to create
            a new password via email.
          </Text>

          <InputBox
            placeholder={"Email"}
            iconName={"close"}
            showIcon={true}
            iconColor={colors.primary}
          />

          <View style={styles.textbtnCon}>
            <Text style={{ fontSize: 13, color: colors.primary }}>
              Not a valid email address. Should be your@email.com
            </Text>
          </View>

          <BButton
            title="Send"
            onPressChange={() => {
              navigation.navigate("Login");
            }}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formCon: {
    height: "60%",
    justifyContent: "center",
    paddingHorizontal: modifiers.containerPadding,
  },
  textbtnCon: {
    alignItems: "center",
    marginBottom: 40,
  },
});
