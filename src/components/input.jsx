import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function InputBox({
  placeholder,
  onTextChange,
  iconName,
  showIcon,
  isSecure,
  iconPress,
  iconColor,
  onBlur,
  value,
}) {
  return (
    <View style={styles.inputStyle}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onTextChange}
        secureTextEntry={isSecure}
        style={styles.input}
        onBlur={onBlur}
        value={value}
      />
      {showIcon === true ? (
        <Ionicons
          style={styles.icon}
          name={iconName}
          size={20}
          color={iconColor}
          onPress={iconPress}
        />
      ) : (
        <View />
      )}
    </View>
  );
}

export { InputBox };

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: "row",
    height: 60,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  icon: {
    alignSelf: "center",
  },
  input: {
    width: "95%",
  },
});
