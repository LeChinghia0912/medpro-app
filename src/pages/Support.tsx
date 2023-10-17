import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MobileMenu from "../components/MobileMenu";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Support = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerBarMobile}>
        <Image style={styles.logo} source={require("../assets/medpro.png")} />
      </View>
      <View style={styles.body}>
        <Text>Phần Hưỡng dẫn</Text>
      </View>

      <View>
        <MobileMenu />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerBarMobile: {
    display: "flex",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  logo: { width: 130, height: 35, marginLeft: 20 },
  icon: {
    marginLeft: 230,
  },

  body: {
    height: "87%",
  },
});

export default Support;
