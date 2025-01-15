import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import Item from "./ProductItem/ProductItem";
import { styles } from "./ProductList.style";
import FloatButton from "../../components/FloatButton/FloatButton";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "./../../AppContext";

export default function ProductList({ route }) {
  const { list } = useContext(AppContext);
  const navigation = useNavigation();

  // lấy lại updatedProduct mới từ navigation -> kiểm tra route.params co tồn tại đê không báo lỗi undefine
  if (route.params) {
    const { updatedProduct, dataItem } = route.params;

    if (updatedProduct) {
      const indexOfProductIdNeedUpdate = list.findIndex(
        (item) => item.id === updatedProduct.id
      );
    
    }

    if (dataItem) {
      const indexOfProductIdNeedDelete = list.findIndex(
        (item) => item.id === dataItem.id
      );
      if (indexOfProductIdNeedDelete !== -1) {
        list.splice(indexOfProductIdNeedDelete, 1);
      }
    }

    console.log("Updated Product:", updatedProduct);
    console.log("Data Item:", dataItem);
  } else {
    console.log("chưa nhận updated/delete Product");
  }

  // hàm tương tác khi ấn FloatButton =>>>>>>>>>>>>>>>>>HỎI ANH TÙNG SAO BẤM ADD TỪ FLOATBUTTON ĐƯỢC LẦN ĐẦU CÒN MẤY LẦN SAU KHÔNG ĂN
  const handleAddProduct = () => {
    // setModalVisible(!modalVisible);
    // dieu huong de ProductAdd
    navigation.navigate("ProductAdd");
  };

  return (
    <View>
      <FlatList
        style={styles.container}
        data={list}
        renderItem={({ item }) => <Item dataItem={item} />}
        keyExtractor={(item) => item.id}
      />
      {/* FloatButton */}

      <FloatButton onPress={handleAddProduct} />
    </View>
  );
}
