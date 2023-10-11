import * as React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { firebase } from "../../services/firebaseConfig";
import { TextInput, Button } from "react-native-paper";
import { CustomCamera } from "../../components/customecamera";
import * as ImagePicker from "expo-image-picker";
import { makeBlob } from "../../services/uploadImage";
import {
  getARandomIds,
  getARandomImageName,
  ShowToast,
} from "../../utils/help";
import LottieView from "lottie-react-native";

function NewProduct({ navigation, route }) {
  const { itemId } = route.params;

  const [textpile, setTextPile] = React.useState("");
  const [textGSM, setTextGSM] = React.useState("");
  const [textWeight, setTextWeight] = React.useState("");
  const [textSizeInch, setTextSizeInch] = React.useState("");
  const [textSizeCM, setTextSizeCM] = React.useState("");
  const [textCat, setTextCat] = React.useState("Bath Towel");
  const [textRef, setTextRef] = React.useState("");
  const [textRemarks, setTextRemarks] = React.useState("...");
  const [showLoading, setShowLoading] = useState(false);
  const [isCameraShown, setIsCameraShown] = useState(false);
  const [imageFromCamera, setImageFromCamera] = useState("");
  const [imageFromPicker, setImageFromPicker] = useState("");
  const [isError, setIsError] = useState(false);

  const saveListing = (imgName, imageUrlOnServer) => {
    const docId = getARandomIds();
    setShowLoading(true);
    firebase
      .firestore()
      .collection("product")
      .doc(docId)
      .set({
        listingId: itemId,
        category: textCat,
        pile: textpile,
        gsm: textGSM,
        weight: textWeight,
        sizeInch: textSizeInch,
        sizeCM: textSizeCM,
        ref: textRef,
        remarks: textRemarks,
        imageName: imgName,
        imageUrl: imageUrlOnServer,
      })
      .then((response) => {
        console.log("Saved Product Successfully");
        // toggleModall();
        setShowLoading(false);
        navigation.goBack();
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
        const userStorageRef = firebase.storage().ref("product/");
        const imageName = getARandomImageName();
        userStorageRef
          .child(imageName)
          .put(imageBlob)
          .then((uploadResponse) => {
            // will fetch uploaded image url for us
            firebase
              .storage()
              .ref("product/" + imageName)
              .getDownloadURL()
              .then((downloadRes) => {
                const imageUrlOnServer = downloadRes;

                // passing the UID and url to add data to firestore function
                saveListing(imageName, imageUrlOnServer);
              })
              .catch((downlaodErr) => {
                console.log(downlaodErr.message);
                setShowLoading(false);
              });

            // get the url from response and then add it with the data to firebase with uid
          })
          .catch((uploadError) => {
            console.log(uploadError.message);
            setShowLoading(false);
          });
      })
      .catch((blobError) => {
        setShowLoading(false);
      });
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
          console.log("image not selected");
        } else {
          onImageCameFromGallery(response.assets[0]);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////  /MAIN/   //////////////////////////////
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 63,
          backgroundColor: "#227C70",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
          overflow: "scroll",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          Add New Product
        </Text>
        <Button
          icon={"content-save"}
          mode="outlined"
          buttonColor="white"
          loading={showLoading}
          onPress={() => {
            setShowLoading(true);
            saveListingImage();
            setShowLoading(false);
          }}
          disabled={showLoading}
        >
          Save
        </Button>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "95%",
          backgroundColor: "white",
          marginVertical: 10,
          borderRadius: 10,
          justifyContent: "center",
          alignContent: "center",
          alignSelf: "center",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            height: "20%",
            width: "50%",
          }}
        >
          <View
            style={{
              backgroundColor: "#F1F6F5",
              height: 150,
              width: 150,
              borderRadius: 50,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
              margin: 10,
            }}
          >
            <Image
              source={{ uri: imageFromPicker || imageFromCamera || null }}
              style={{
                width: 150,
                height: 150,
                borderRadius: 15,
                backgroundColor: "#F1F6F5",
              }}
              resizeMode={"contain"}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            flex: 1,
            width: "50%",
            borderLeftWidth: 2,
            borderLeftColor: "gray",
            marginVertical: 5,
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
                color={"#227C70"}
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
                color={"#227C70"}
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
      <KeyboardAvoidingView
        style={{
          flex: 1,
          flexDirection: "column",
        }}
        behavior="height"
        enabled
        keyboardVerticalOffset={50}
      >
        <ScrollView>
          <View
            style={{
              marginHorizontal: 10,
              padding: 10,
              justifyContent: "space-evenly",
              backgroundColor: "white",
              borderRadius: 10,
            }}
          >
            <TextInput
              label={"Pile Yarn"}
              value={textpile}
              onChangeText={(text) => {
                setTextPile(text);
              }}
              backgroundColor={"#F1F6F5"}
              activeUnderlineColor={"#227C70"}
              style={{ marginVertical: 5 }}
              error={isError}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                flex: 1,
                marginVertical: 5,
              }}
            >
              <TextInput
                label={"GSM"}
                value={textGSM}
                onChangeText={(text) => {
                  setTextGSM(text);
                }}
                backgroundColor={"#F1F6F5"}
                activeUnderlineColor={"#227C70"}
                style={{ width: "48%" }}
                error={isError}
              />
              <TextInput
                label={"Weight LBS"}
                value={textWeight}
                onChangeText={(text) => {
                  setTextWeight(text);
                }}
                backgroundColor={"#F1F6F5"}
                activeUnderlineColor={"#227C70"}
                style={{ width: "48%" }}
                error={isError}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                flex: 1,
                marginVertical: 5,
              }}
            >
              <TextInput
                label={"Size in CM"}
                value={textSizeCM}
                onChangeText={(text) => {
                  setTextSizeCM(text);
                }}
                backgroundColor={"#F1F6F5"}
                activeUnderlineColor={"#227C70"}
                style={{ width: "48%" }}
                error={isError}
              />
              <TextInput
                label={"Size in Inch"}
                value={textSizeInch}
                onChangeText={(text) => {
                  setTextSizeInch(text);
                }}
                backgroundColor={"#F1F6F5"}
                activeUnderlineColor={"#227C70"}
                style={{ width: "48%" }}
                error={isError}
              />
            </View>
            <TextInput
              label={"Category"}
              value={textCat}
              onChangeText={(text) => {
                setTextCat(text);
              }}
              backgroundColor={"#F1F6F5"}
              activeUnderlineColor={"#227C70"}
              style={{ marginVertical: 5 }}
              error={isError}
            />
            <TextInput
              label={"Ref"}
              value={textRef}
              onChangeText={(text) => {
                setTextRef(text);
                if (text === null) {
                  set;
                }
              }}
              backgroundColor={"#F1F6F5"}
              activeUnderlineColor={"#227C70"}
              style={{ marginVertical: 5 }}
              error={isError}
            />
            <TextInput
              label={"Remarks"}
              value={textRemarks}
              onChangeText={(text) => {
                setTextRemarks(text);
              }}
              multiline={true}
              numberOfLines={4}
              backgroundColor={"#F1F6F5"}
              activeUnderlineColor={"#227C70"}
              style={{ marginVertical: 5 }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
      {showLoading && (
        <LottieView
          source={require("../../../assets/animations/photos-lottie.json")}
          autoPlay
          loop
        />
      )}
    </View>
  );
}

export { NewProduct };
