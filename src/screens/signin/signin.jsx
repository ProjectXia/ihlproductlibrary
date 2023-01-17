import { useState } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { ShowToast } from "../../utils/help";
import { firebase } from "../../services/firebaseConfig";
import { InputBox } from "../../components/input";
import { TextButton } from "../../components/textbutton";
import { BButton } from "../../components/bbutton";
import { HeaderLogin } from "../../components/headerlogin";
import { Ionicons } from "@expo/vector-icons";
import {
  getUserId,
  storeUserSession,
  getUserLoggedInStatus,
} from "../../services/storageService";
import LottieView from "lottie-react-native";

function SignIN({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const loggedIn = getUserLoggedInStatus();
  const UID = getUserId();
  console.log("my_uid", UID);
  console.log("user_logged", loggedIn);

  const handleShowPass = () => {
    if (showPass === true) {
      setShowPass(false);
    } else if (showPass === false) {
      setShowPass(true);
    }
  };

  const onSignin = () => {
    setShowLoading(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((authResponse) => {
        setShowLoading(false);

        const userUid = authResponse.user.uid;

        storeUserSession(userUid, "true", email);

        navigation.replace("Dashboard");
        ShowToast("success", "you are the authentic useer CONGO", "top");
        //  now we need a session of user and also take him to goToHome()
      })
      .catch((authError) => {
        setShowLoading(false);
        ShowToast("error", authError.message, "top");
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.formCon}>
        <HeaderLogin title={"Login"} />

        <Ionicons
          name="person-circle"
          size={150}
          color={"white"}
          style={{
            alignSelf: "center",
          }}
          onPress={() => {
            alert("camera click");
          }}
        />

        <InputBox
          placeholder={"Email"}
          iconName={"mail-outline"}
          showIcon={true}
          onTextChange={setEmail}
        />
        <InputBox
          placeholder={"Password"}
          isSecure={!showPass}
          iconName={showPass === false ? "eye-outline" : "eye-off-outline"}
          showIcon={true}
          iconPress={handleShowPass}
          onTextChange={setPassword}
        />
        <View style={styles.textbtnCon}>
          <TextButton
            title="Forgot your password?"
            onPressChange={() => {
              navigation.navigate("forgot");
            }}
          />
        </View>
        <BButton title="Sign IN" onPressChange={onSignin} cwidth={"95%"} />
        <View style={styles.gotoSignupStyle}>
          <TextButton
            title="Don't have an account?"
            onPressChange={() => {
              navigation.navigate("SignUp");
            }}
          />
        </View>
      </View>
      {showLoading && (
        <LottieView
          source={require("../../../assets/animations/photos-lottie.json")}
          autoPlay
          loop
        />
      )}
      <ShowToast />
    </View>
  );
}

const styles = StyleSheet.create({
  formCon: {
    flex: 1,
    paddingHorizontal: 10,
  },
  textbtnCon: {
    alignItems: "flex-end",
    marginVertical: 15,
  },
  gotoSignupStyle: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export { SignIN };
