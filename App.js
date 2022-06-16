import * as React from "react";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Homescreen from "./Screens/home";
import Detailscreen from "./Screens/details";

export default function App() {
  return (
    <Appcontainer />
  );
}

const appStackNav = createStackNavigator({
  Home: { screen: Homescreen, navigationOptions: {headerShown: false} },
  Details: { screen: Detailscreen }
}, {
  initialRouteName: "Home"
})

const Appcontainer = createAppContainer(appStackNav)