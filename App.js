import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppNavigation } from "./src/navigations/appnavigation";
import { MenuProvider } from "react-native-popup-menu";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MenuProvider>
        <AppNavigation />
      </MenuProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
