import { useEffect } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Loading } from "../../components/loading";

function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Dashboard");
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
