import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, CheckBox } from "react-native-elements";
import response from "../functions/response";
import NumberPicker from "../views/NumberPicker";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <NumberPicker title={"請輸入平民人數"} color={"#00EC00"} />
      <NumberPicker title={"請輸入狼人人數"} color={"#750000"} />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <CheckBox
          title={"預言家"}
          checked={true}
          containerStyle={styles.checkBox}
        />
        <CheckBox
          title={"女巫"}
          checked={true}
          containerStyle={styles.checkBox}
        />
        <CheckBox
          title={"獵人"}
          checked={true}
          containerStyle={styles.checkBox}
        />
        <CheckBox
          title={"白痴"}
          containerStyle={styles.checkBox}
          //checked={this.state.checked}
        />
      </View>
      <View style={{ backgroundColor: "yellow" }}>
        <Button title={"下一步"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: response(25),
  },
  checkBox: {
    backgroundColor: "transparent",
    borderWidth: 0,
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: response(1),
    paddingRight: 0,
  },
});

export default MainScreen;
