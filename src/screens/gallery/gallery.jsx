import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { GalleryCard } from "../../components/gallerycard";
import { TopHeader } from "../../components/topheader";
import { firebase } from "../../services/firebaseConfig";
import { TextInput, Button, Appbar } from "react-native-paper";
//import ImageViewer which will help us to zoom Image
import ImageViewer from "react-native-image-zoom-viewer";
import { ImageView } from "../../components/imageView";
import Modal from "react-native-modal";

function Gallery({ navigation, route }) {
  const { itemId, itemName } = route.params;

  const [productData, setProductData] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const [imageData, setImageData] = useState(new Map());
  const [isModalVisible, setModalVisible] = useState(false);

  var images;

  // when this component/screen will load infront of user
  useEffect(() => {
    getAllProduct();
  }, []);

  const toggleModall = () => {
    setModalVisible(!isModalVisible);
  };

  const __renderProductImage = ({ item }) => {
    const listing = item.data();
    const listId = item.id;
    return (
      <GalleryCard
        imgURI={{ uri: listing.imageUrl }}
        title={listing.category}
        imageClick={() => {
          navigation.navigate("ImageView", { image: listing.imageUrl });
          // images = [{ url: listing.imageUrl }];
          // //setImageData({ url: listing.imageUrl });
          // toggleModall();
        }}
      />
    );
  };

  const getAllProduct = () => {
    setShowLoading(true);
    firebase
      .firestore()
      .collection("product")
      .where("listingId", "==", itemId)
      .get()
      .then((response) => {
        setProductData(response.docs);
        setShowLoading(false);
      })
      .catch((error) => {
        console.log({ error });
        setShowLoading(false);
      });
  };

  const headerText = () => {
    return { itemName } + "Gallery";
  };

  const MyHeader = () => {
    return (
      <Appbar.Header mode="small" style={{ backgroundColor: "#F1F6F5" }}>
        {/* <Appbar.BackAction onPress={() => {}} /> */}
        <Appbar.Content title={itemName + " Gallery"} />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar.Header>
    );
  };

  return (
    <View style={styles.mainCon}>
      {/* <TopHeader
        listingTitle={itemName}
        onNewPress={() => {
          navigation.navigate("NewProduct", {
            itemId: itemId,
          });
        }}
      /> */}
      <MyHeader />
      {/* <ScrollView> */}

      <FlatList
        data={productData}
        renderItem={__renderProductImage}
        horizontal={false}
        numColumns={2}
        key={productData.id}
        ListEmptyComponent={
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "gray",
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              No Product listing found !
            </Text>
            <Button mode="outlined" onPress={() => {}}>
              Add New Item
            </Button>
          </View>
        }
        refreshing={showLoading}
        onRefresh={() => getAllProduct()}
      />

      {/* </ScrollView> */}
      <Modal
        animationIn={"slideInRight"}
        animationOut={"slideOutDown"}
        animationOutTiming={1500}
        isVisible={isModalVisible}
        onRequestClose={() => {
          toggleModall();
        }}
      >
        <View
          style={{
            width: "100%",
            height: "70%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F1F6F5",
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              toggleModall();
            }}
            style={{
              width: 30,
              height: 30,
              backgroundColor: "red",
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
              margin: 5,
            }}
          >
            <Text style={{ fontSize: 20 }}>X</Text>
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <ImageViewer imageUrls={images} renderIndicator={() => null} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export { Gallery };

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
  },
});
