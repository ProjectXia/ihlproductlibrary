import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DashBoard } from "../screens/dashboard/dashboard";
import { Splash } from "../screens/splash/splash";
import { SignUP } from "../screens/signup/signup";
import { SignIN } from "../screens/signin/signin";

import { Gallery } from "../screens/gallery/gallery";
import { NewProduct } from "../screens/product/newproduct";
import { ImageView } from "../components/imageView";
import { ProductDetail } from "../screens/productdetail/productdetail";
import { Settings } from "../screens/setting/setting";

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SignUp" component={SignUP} />
        <Stack.Screen name="Login" component={SignIN} />
        <Stack.Screen name="Dashboard" component={DashBoard} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="NewProduct" component={NewProduct} />
        <Stack.Screen name="ImageView" component={ImageView} />
        <Stack.Screen name="Setting" component={Settings} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { AppNavigation };
