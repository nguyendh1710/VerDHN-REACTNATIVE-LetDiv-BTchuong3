import React, { useState,useContext } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import EmployeeItem from "./EmployeeItem/EmployeeItem";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./EmployeeList.style";
import FloatButton from "./../../components/FloatButton/FloatButton";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "./../../AppContext";

export default function EmployeeList() {
// dùng navigation
  const navigation = useNavigation();
  // dùng context để lấy state mới trên store về hiển thị -> nếu có tìm kiếm thì dùng dữ liệu tìm kiếm
  const { list } = useContext(AppContext);
  const [filteredData, setFilteredData] = useState(list); 
  const handleSearch = (query) => {
      const results = list.filter((item) =>
        //toLowerCase dùng cho string
        item.name.toLowerCase().includes(query.toLowerCase()) || 
        item.role.toLowerCase().includes(query.toLowerCase()) 
      );
      console.log(results);
      setFilteredData(results);
  };

  // Hàm them nhân viên
  const handleAddEmployee = () => {

    // dieu huong de EmployeeAdd
    navigation.navigate("EmployeeAdd");

  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Quản Lý Nhân Viên</Text>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <TouchableOpacity>
              <Ionicons
                style={styles.searchIcon}
                name="search"
                size={32}
                color="gray"
              />
            </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              placeholder="Tìm kiếm nhân viên"
              placeholderTextColor="rgba(206, 212, 218, 1)"
              accessibilityLabel="Tìm kiếm nhân viên"
              // không cần kiểm soát value -> uncontrol component
              // value={searchQuery}
              onChangeText={(text)=>handleSearch(text)}
            />
          </View>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={filteredData}
            renderItem={({ item }) => <EmployeeItem dataItem={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>

      {/* Đặt FloatButton ở ngoài content, trong container */}

      <FloatButton onPress={handleAddEmployee} />
 
    </View>
  );
}
