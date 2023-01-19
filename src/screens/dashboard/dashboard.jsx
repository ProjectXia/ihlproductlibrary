import * as React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Header } from "../../components/header";
import { MainCard } from "../../components/maincard";
import Modal from "react-native-modal";
import { InputBox } from "../../components/input";
import { BButton } from "../../components/bbutton";
import { Ionicons } from "@expo/vector-icons";
import { CustomCamera } from "../../components/customecamera";
import * as ImagePicker from "expo-image-picker";
import { firebase } from "../../services/firebaseConfig";
import { clearUserSession } from "../../services/storageService";
import {
  getARandomIds,
  getARandomImageName,
  ShowToast,
} from "../../utils/help";
import { makeBlob } from "../../services/uploadImage";
import { TextInput, Button, Appbar } from "react-native-paper";
import MenuTop from "../../components/menutop";
import AwesomeAlert from "react-native-awesome-alerts";
import LottieView from "lottie-react-native";

function DashBoard({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCameraShown, setIsCameraShown] = useState(false);
  const [imageFromCamera, setImageFromCamera] = useState("");
  const [imageFromPicker, setImageFromPicker] = useState("");
  const [listingData, setListingData] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const [listName, setListName] = useState();
  const [likesCount, setLikesCount] = useState(0);
  const [likedImage, setLikedImage] = useState(false);
  const [likedIcon, setLikedIcon] = useState("heart-sharp");
  const [showAlert, setShowAlert] = useState(false);
  const [listID, setListID] = useState();
  const [imgID, setImgID] = useState();
  const [lName, setLName] = useState();

  // when this component/screen will load infront of user
  useEffect(() => {
    getAllListing();
  }, []);

  const toggleModall = () => {
    setListName("");
    setModalVisible(!isModalVisible);
  };
  const onImageCameFromGallery = (image) => {
    setImageFromPicker(image.uri);
  };

  const pickImageFromGallery = () => {
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    })
      .then((response) => {
        // when users opens the picker and just comes back and does not select the image
        if (response.canceled) {
          alert("not selected");
        } else {
          onImageCameFromGallery(response.assets[0]);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const saveListing = (imgName, imageUrlOnServer) => {
    const docId = getARandomIds();
    firebase
      .firestore()
      .collection("listing")
      .doc(docId)
      .set({
        name: listName,
        likes: likesCount,
        imageName: imgName,
        imageUrl: imageUrlOnServer,
      })
      .then((response) => {
        ShowToast("info", "Saved Listing Successfully");
        toggleModall();
        setShowLoading(false);
      })
      .catch((error) => {
        console.log("error: " + error);
        setShowLoading(false);
      });
  };

  const saveListingImage = () => {
    const imageUri = imageFromCamera || imageFromPicker;
    setShowLoading(true);
    makeBlob(imageUri)
      .then((imageBlob) => {
        const userStorageRef = firebase.storage().ref("listing/");
        const imageName = getARandomImageName();
        userStorageRef
          .child(imageName)
          .put(imageBlob)
          .then((uploadResponse) => {
            // will fetch uploaded image url for us
            firebase
              .storage()
              .ref("listing/" + imageName)
              .getDownloadURL()
              .then((downloadRes) => {
                const imageUrlOnServer = downloadRes;

                // passing the UID and url to add data to firestore function
                saveListing(imageName, imageUrlOnServer);
              })
              .catch((downlaodErr) => {
                ShowToast("error", downlaodErr.message);
                setShowLoading(false);
              });

            // get the url from response and then add it with the data to firebase with uid
          })
          .catch((uploadError) => {
            ShowToast("error", uploadError.message);
            setShowLoading(false);
          });
      })
      .catch((blobError) => {
        setShowLoading(false);
      });
  };

  const getAllListing = () => {
    setShowLoading(true);
    firebase
      .firestore()
      .collection("listing")
      .get()
      .then((response) => {
        setListingData(response.docs);
        setShowLoading(false);
      })
      .catch((error) => {
        console.log({ error });
        setShowLoading(false);
      });
  };

  const __renderItem = ({ item }) => {
    const listing = item.data();
    const listId = item.id;

    return (
      <Button
        mode="outlined"
        onPress={() => {
          navigation.navigate("Gallery", {
            itemId: listId,
            itemName: listing.name,
          });
        }}
        style={{
          marginHorizontal: 5,
          marginVertical: 8,
          borderColor: "#227C70",
        }}
        labelStyle={{ color: "#227C70" }}
        onLongPress={() => {
          // onListingLongPress(listId, listing.imageName);
          setListID(listId);
          setImgID(listing.imageName);
          setLName(listing.name);
          setShowAlert(true);
        }}
      >
        {listing.name}
      </Button>
    );
  };

  const __renderListingImage = ({ item }) => {
    const listing = item.data();
    const listId = item.id;
    return (
      <MainCard
        imgURI={{ uri: listing.imageUrl }}
        title={listing.name}
        onImagePress={() => {
          console.log(listing.name);
          navigation.navigate("Gallery", {
            itemId: listId,
            itemName: listing.name,
          });
        }}
        likesCount={listing.likes}
        likeIconName={"heart-outline"}
        onLikesPress={() => {
          alert(listId);
        }}
      />
    );
  };

  const onListingLongPress = (recipyId, imageId) => {
    const userStorageRef = firebase.storage().ref("listing/");
    userStorageRef
      .child(imageId)
      .delete()
      .then((delImage) => {
        firebase
          .firestore()
          .collection("listing")
          .doc(recipyId)
          .delete()
          .then((response) => {
            ShowToast("success", "your recipy got deleted");
          })
          .catch((error) => {
            ShowToast("error", error.message);
          });
      })
      .catch(() => {
        ShowToast("error", error.message);
      });
  };

  const signOutME = () => {
    clearUserSession;
    navigation.replace("Login");
  };

  const MyHeader = () => {
    return (
      <Appbar.Header mode="small" style={{ backgroundColor: "#F1F6F5" }}>
        <Appbar.Content title="Product Listing" />
        <MenuTop
          viewadd={<Appbar.Action icon="dots-vertical" />}
          newAdd={toggleModall}
          signOUT={signOutME}
        />
      </Appbar.Header>
    );
  };

  return (
    <View
      style={{ flex: 1, backgroundColor: "white", flexDirection: "column" }}
    >
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Remove Listing"
        message={"Do you wants to delete the '" + lName + "' listing"}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="No, cancel"
        confirmText="Yes, delete it"
        confirmButtonColor="#DD6B55"
        onCancelPressed={() => {
          setShowAlert(false);
        }}
        onConfirmPressed={() => {
          onListingLongPress(listID, imgID);
          setShowAlert(false);
          getAllListing();
        }}
      />
      <MyHeader />
      <Header onAddPress={toggleModall} />
      <View
        style={{
          flexDirection: "column",
          padding: 10,
          height: 100,
          backgroundColor: "#F1F6F5",
          marginVertical: 5,
        }}
      >
        <Text style={{ color: "#227C70", fontSize: 16, fontWeight: "600" }}>
          Favourite Products Listing ...
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
          }}
        >
          <FlatList
            data={listingData}
            horizontal={true}
            renderItem={__renderItem}
            ListEmptyComponent={
              <Text style={{ color: "gray", fontSize: 16, fontWeight: "600" }}>
                No listing found !
              </Text>
            }
            refreshing={showLoading}
            onRefresh={() => getAllListing()}
          />
        </View>
      </View>
      <FlatList
        data={listingData}
        renderItem={__renderListingImage}
        horizontal={false}
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
              No listing found !
            </Text>
            <Button mode="outlined" onPress={() => {}}>
              Add New Item
            </Button>
          </View>
        }
        refreshing={showLoading}
        onRefresh={() => getAllListing()}
      />

      <Modal
        animationIn={"slideInRight"}
        animationOut={"slideOutDown"}
        animationOutTiming={1500}
        isVisible={isModalVisible}
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
          <Text style={{ fontSize: 18, fontWeight: "400" }}>
            Add New Listing
          </Text>
          <InputBox
            placeholder={"Listing Name"}
            iconName={"list-circle-outline"}
            showIcon={true}
            onTextChange={setListName}
            value={listName}
          />
          <View
            style={{
              flexDirection: "row",
              width: "95%",
              backgroundColor: "white",
              marginVertical: 10,
              borderRadius: 10,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                height: "40%",
                width: "50%",
              }}
            >
              <View style={styles.pickImgCircle}>
                <Image
                  source={{ uri: imageFromPicker || imageFromCamera || null }}
                  style={{ width: 150, height: 150, borderRadius: 15 }}
                  resizeMode={"contain"}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "column",
                flex: 1,
                width: "50%",

                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>Upload Image</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  height: "20%",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setIsCameraShown(!isCameraShown);
                  }}
                >
                  <Ionicons
                    name="camera-sharp"
                    size={50}
                    style={{
                      borderRadius: 50,
                      backgroundColor: "#F1F6F5",
                      padding: 10,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  height: "20%",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity onPress={pickImageFromGallery}>
                  <Ionicons
                    name="images-sharp"
                    size={50}
                    style={{
                      borderRadius: 50,
                      backgroundColor: "#F1F6F5",
                      padding: 10,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "50%",
              justifyContent: "space-around",
            }}
          >
            <BButton title="Save" onPressChange={saveListingImage} />
            <BButton title="Cancel" onPressChange={toggleModall} />
          </View>
        </View>
        {showLoading && (
          <LottieView
            source={require("../../../assets/animations/photos-lottie.json")}
            autoPlay
            loop
          />
        )}
      </Modal>
      <CustomCamera
        show={isCameraShown}
        onClose={() => setIsCameraShown(false)}
        onPictureTaken={(response) => {
          setIsCameraShown(false);
          //setIsPickerShown(false);
          // if image came it will add the uri in our state
          setImageFromCamera(response.uri);
        }}
      />
    </View>
  );
}

export { DashBoard };

const styles = StyleSheet.create({
  pickImgCircle: {
    backgroundColor: "#F1F6F5",
    height: 150,
    width: 150,
    borderRadius: 50,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});
