import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MobileMenu from "../components/MobileMenu";

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerBarMobile}>
        <Image style={styles.logo} source={require("../assets/medpro.png")} />
      </View>
      <View style={styles.body}>
        <Text>Đây là trang Thông tin</Text>
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
    backgroundColor: "#e8f2f7",
  },
});

export default Profile;
