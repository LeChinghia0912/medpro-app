import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const InputSearch = () => {
  return (
    <View style={styles.inputSearch}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Tìm CSYT/Chuyên khoa/Dịch vụ..."
      />
    </View>
  );
};

export default InputSearch;
const styles = StyleSheet.create({
  inputSearch: {
    padding: 5,
    borderColor: "#1da1f2",
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
  },
});
