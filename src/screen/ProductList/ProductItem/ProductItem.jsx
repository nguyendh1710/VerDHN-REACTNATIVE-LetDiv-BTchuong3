import { View, Text, Image } from "react-native";
import { styles } from "./ProductItem.style";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton ";
import { useNavigation } from "@react-navigation/native";

export default function ProductItem({ dataItem, onDeleteProduct }) {
  const navigation = useNavigation();

  const handleUpdate = () => {
    navigation.navigate("ProductUpdate", { dataItem }); // phai boc dataItem bang {} mac du no la obj
    // mở modal
    // setModalState (!modalState);
    // gửi dữ liệu sản phẩm được chọn lên cha ProductList qua biến state selectedProduct rồi từ đó mới gửi qua cho component UpdateProduct => dùng kỹ thuật nâng state bên cha
    // sendProductDataFromItem(dataItem);
  };
  const handleDelete = () => {
    navigation.navigate("ProductList", { dataItem });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tên sản phẩm: {dataItem.name} </Text>
      <Text>Giá sản phẩm: {dataItem.price} </Text>
      <Image source={dataItem.image} style={styles.image} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.buttonTextContainer}>
          <PrimaryButton style={styles.button} onPress={handleUpdate}>
            Sửa
          </PrimaryButton>
        </Text>
        <PrimaryButton style={styles.button} onPress={handleDelete}>
          Xóa
        </PrimaryButton>
      </View>
    </View>
  );
}
