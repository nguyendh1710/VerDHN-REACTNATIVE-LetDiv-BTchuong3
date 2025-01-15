import { NavigationContainer } from '@react-navigation/native'; import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProductList from "./src/screen/ProductList/ProductList";
import ProductAdd from "./src/screen/ProductAdd/ProductAdd";
import ProductUpdate from "./src/screen/ProductUpdate/ProductUpdate";
import Cart from "./src/screen/Cart/Cart";
import AppProvider from './src/AppContext';
import TabBar from './src/components/tab-bar/tab-bar/tab-bar.component';



const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();


export default function App() {
  return (
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShow: true}}>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="ProductAdd" component={ProductAdd} />
            <Stack.Screen name="ProductUpdate" component={ProductUpdate} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </AppProvider>
  );
}


const Main = () => (

   <BottomTab.Navigator
     screenOptions={{headerShow: true}}
     tabBar={TabBar}

   >
       <BottomTab.Screen 
       name="ProductList" 
       component={ProductList}
       options={{tabBarLabel:'Trang chủ', icon:'home-outline'}}
       />
       <BottomTab.Screen 
       name="Cart" 
       component={Cart}
       options={{tabBarLabel:'Giỏ hàng', icon:'cart-outline'}}
       />
   </BottomTab.Navigator>


);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop:40,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
