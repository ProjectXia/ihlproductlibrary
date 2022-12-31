//Example of Pinch to Zoom Image in React Native
//https://aboutreact.com/react-native-pinch-to-zoom-image/

//import React in our code
import React from "react";

//import all the components we are going to use
import { SafeAreaView, StyleSheet, View } from "react-native";

//import ImageViewer which will help us to zoom Image
import ImageViewer from "react-native-image-zoom-viewer";

function ImageView({ navigation, route }) {
  const { image } = route.params;
  const images = [
    {
      url: image,
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageViewer
          imageUrls={images}
          renderIndicator={() => null}
          onCancel={() => null}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});

export { ImageView };
