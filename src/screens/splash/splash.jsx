import { useEffect } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Loading } from "../../components/loading";
import { getUserLoggedInStatus } from "../../services/storageService";

function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      getUserLoggedInStatus()
        .then((response) => {
          if (response === "true") {
            navigation.replace("Dashboard");
          } else {
            navigation.replace("Login");
          }
        })
        .catch((error) => {
          ShowToast("error", error.message);
        });
    }, 3000);
  }, []);

  return (
    <View style={styles.mainCon}>
      <Loading
        onPressGetStarted={() => {
          navigation.replace("Dashboard");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    backgroundColor: "white",
  },
});

export { Splash };
