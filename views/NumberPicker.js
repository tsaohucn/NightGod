import React from "react";
import { Picker, StyleSheet, Text, View } from "react-native";
import response from "../functions/response";

const NumberPicker = ({
  title = "",
  selectedValue = 0,
  onValueChange,
  max = 10,
  color = "#000000",
}) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.civilianText,
          {
            color,
          },
        ]}
      >
        {title}
      </Text>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={onValueChange}
      >
        {Array.from(Array(max)).map((_, index) => (
          <Picker.Item key={index} label={index.toString()} value={index} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    aspectRatio: 100 / 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  picker: { width: response(100), height: "100%", marginRight: 0 },
  civilianText: {
    fontSize: response(25),
  },
});

export default NumberPicker;
