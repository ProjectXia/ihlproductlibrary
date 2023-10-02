//

import { View } from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function MenuTop({
  viewadd,
  newAdd,
  signOUT,
  aboutus,
  contactus,
}) {
  const [emailval, setEmailval] = useState();

  const getEmail = async () => {
    const val = await AsyncStorage.getItem("user_email");
    if (val !== null) {
      setEmailval(val);
      console.log(emailval);
    }
  };
  useEffect(() => {
    getEmail();
  }, []);

  return (
    <Menu>
      <MenuTrigger text={viewadd} />
      <MenuOptions>
        {emailval !== "admin@gmail.com" ? null : (
          <MenuOption
            onSelect={newAdd}
            text="+ Add New"
            style={{ paddingVertical: 10, paddingHorizontal: 10 }}
          />
        )}
        <View
          style={{ backgroundColor: "gray", height: 1, width: "100%" }}
        ></View>
        <MenuOption
          onSelect={aboutus}
          text="About us"
          style={{ paddingVertical: 10, paddingHorizontal: 10 }}
        />
        <View
          style={{ backgroundColor: "gray", height: 1, width: "100%" }}
        ></View>
        <MenuOption
          onSelect={contactus}
          text="Contact us"
          style={{ paddingVertical: 10, paddingHorizontal: 10 }}
        />
        <View
          style={{ backgroundColor: "gray", height: 1, width: "100%" }}
        ></View>
        <MenuOption
          onSelect={signOUT}
          text="Sign out"
          style={{ paddingVertical: 10, paddingHorizontal: 10 }}
        />
      </MenuOptions>
    </Menu>
  );
}
