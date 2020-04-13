import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import GameScreen from "./screens/GameScreen";
import MainScreen from "./screens/MainScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"開局 - 設置玩家人數"} component={MainScreen} />
        <Stack.Screen name={"遊戲開始"} component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
