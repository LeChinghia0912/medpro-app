import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import InputSearch from "../../components/InputSearch";
import MobileMenu from "../../components/MobileMenu";

interface MenuItem {
  title: string;
  route: string;
}

const menuItems: MenuItem[] = [
  { title: "Đặt khám tại cơ sở", route: "Login" },
  { title: "Đặt khám tại bác sĩ", route: "Doctor" },
  { title: "Tư vấn khám bệnh từ xa", route: "Consultation" },
  { title: "Gói sức khỏe toàn diện", route: "HealthPackage" },
  { title: "Xét nghiệm tại nhà", route: "HomeTesting" },
  { title: "Thanh toán viện phí", route: "Payment" },
  { title: "Tra cứu kết quả khám bệnh", route: "Results" },
  { title: "Đặt khám 1900-2115", route: "Booking" },
  { title: "Hướng dẫn đặt khám", route: "Guide" },
];

const HomePage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const renderMenuItem = (item: MenuItem) => {
    return (
      <TouchableOpacity
        key={item.route}
        style={styles.cardMenu}
        onPress={() => {
          navigation.navigate(item.route);
        }}
      >
        <Text style={styles.textListMenu}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBar}>
        <Image
          style={styles.logo}
          source={require("../../assets/medpro.png")}
        />
        <Icon name="bars" size={24} color="black" style={styles.icon} />
      </View>
      <ScrollView style={styles.body}>
        <InputSearch />
        <View style={styles.listMenu}>
          <View style={styles.menuContainer}>
            {menuItems.map(renderMenuItem)}
          </View>
        </View>

        <View style={styles.homeInfo}>
          <View style={styles.headerTitle}>
            <Text style={styles.title}>MEDPRO</Text>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 16,
                fontWeight: "700",
                fontStyle: "normal",
                color: "#003553",
              }}
            >
              ĐẶT LỊCH KHÁM BỆNH
            </Text>
            <Text style={styles.desc}>
              <Text style={{ fontWeight: "700" }}>MEDPRO</Text> cung cấp dịch vụ
              đặt khám nhanh, lấy số thứ tự trực tuyến và tư vấn sức khỏe từ xa
              tại các Cơ sở Y tế hàng đầu Việt Nam như Bệnh viện Đại học Y Dược
              TP.HCM, Bệnh viện Chợ Rẫy và Bệnh viện Nhi Đồng...
            </Text>
            <View style={styles.wrapper}>
              <Image
                style={styles.imageContainer}
                source={require("../../assets/homecontainer.png")}
              />
              <Text style={styles.title}>Đặt khám nhanh</Text>
              <Text style={styles.desc}>
                Đặt khám nhanh, thanh toán và lấy số thứ tự trực tuyến tiết kiệm
                thời gian công sức
              </Text>
              <View style={styles.btnDangKy}>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontWeight: "700",
                      color: "#00b5f1",
                      fontSize: 16,
                    }}
                  >
                    Đặt khám ngay
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <MobileMenu />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBar: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: { width: 130, height: 35 },
  icon: {
    marginLeft: "auto",
  },
  body: {
    flex: 1,
    backgroundColor: "#e8f2f7",
  },
  listMenu: {
    marginTop: 20,
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  menuContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cardMenu: {
    flexBasis: "33.33%",
    padding: 25,
    borderColor: "#e8f2f7",
    borderWidth: 2,
    alignItems: "center",
  },
  textListMenu: {
    color: "black",
  },

  homeInfo: {
    height: 620,
    margin: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    marginLeft: 10,
    color: "#00b5f1",
  },
  desc: {
    fontSize: 14,
    margin: 10,
    color: "black",
    lineHeight: 25,
  },
  wrapper: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 400,
    margin: 15,
  },
  imageContainer: {
    borderRadius: 10,
    width: "auto",
    height: 200,
  },
  btnDangKy: {
    marginTop: 15,
    width: 350,
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    borderColor: "#1da1f2",
    borderWidth: 2,
  },
  headerTitle: {},
});

export default HomePage;
