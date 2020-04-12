import React from "react";
import { Picker, StyleSheet, Text, View } from "react-native";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.civilianText}>{"請輸入平民人數"}</Text>
      <Picker
        selectedValue={"ele"}
        style={styles.picker}
        //onValueChange={
        //  (itemValue, itemIndex) => {}
        //this.setState({ language: itemValue })
        //}
      >
        {Array.from(Array(3)).map((_, index) => (
          <Picker.Item key={index} label={index.toString()} value={index} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  picker: { height: 50, width: 100 },
  civilianText: { fontSize: 30, color: "#BF0060" },
});

export default MainScreen;
