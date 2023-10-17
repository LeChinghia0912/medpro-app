import React from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const menuItems = [
  { title: "Trang chủ", route: "HomePage" },
  { title: "Hồ Sơ", route: "Profile" },
  { title: "Phiếu khám", route: "Profile" },
  { title: "Thông báo", route: "Notification" },
];

const MobileMenu = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.menuFooter}>
      <View style={styles.menuContent}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuAction}
            onPress={() => {
              navigation.navigate(item.route);
            }}
          >
            <Text style={styles.menuText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuFooter: {
    borderTopColor: "#ddd",
    borderTopWidth: 1,
    display: "flex",
    height: 50,
    backgroundColor: "#fafafb",
  },
  menuContent: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
  },
  menuText: {
    color: "black",
    fontSize: 14,
    paddingHorizontal: 10,
  },
  menuAction: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    padding: 2,
    marginHorizontal: 5,
  },
});

export default MobileMenu;
