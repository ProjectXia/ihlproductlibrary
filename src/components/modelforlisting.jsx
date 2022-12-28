import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";

function ModalListing({ onPressMe, isModalVisibleMe }) {
  return (
    <View style={{ flex: 1 }}>
      <Button title="Show modal" onPress={onPressMe} />

      <Modal isVisible={isModalVisibleMe}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={onPressMe} />
        </View>
      </Modal>
    </View>
  );
}

export default ModalListing;
