import { useRef, useEffect } from "react";
import { View, Animated } from "react-native";
import { BButton } from "../../components/bbutton";
import { clearUserSession } from "../../services/storageService";

function Settings({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const attemptToLogout = () => {
    clearUserSession();
    navigation.replace("Login");
  };

  const openCalendar = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
    }).start();
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <BButton onPressChange={attemptToLogout} title={"Sign Out"} />
    </View>
  );
}

export { Settings };
