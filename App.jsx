import { StyleSheet,SafeAreaView } from "react-native";
import EmployeeList from "./src/screen/EmployeeList/EmployeeList";
import EmployeeAdd from "./src/screen/EmployeeAdd/EmployeeAdd";
import EmployeeUpdate from "./src/screen/EmployeeUpdate/EmployeeUpdate";
import AppProvider from './src/AppContext';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBar from './src/components/tab-bar/tab-bar/tab-bar.component';
import EmployeeResignation from './src/screen/EmployeeResignation/EmployeeResignation';




const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <AppProvider>
    <SafeAreaView style={styles.container}>
  
      <NavigationContainer> 
        <Stack.Navigator screenOptions={{headerShow: true}}> 
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="EmployeeAdd" component={EmployeeAdd} />
          <Stack.Screen name="EmployeeUpdate" component={EmployeeUpdate} />
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
      name="EmployeeList" 
      component={EmployeeList}
      options={{tabBarLabel:'DS Nhân viên', icon:'person'}}
      />
      <BottomTab.Screen 
      name="EmployeeResignation" 
      component={EmployeeResignation}
      options={{tabBarLabel:'DS Nghỉ việc', icon:'person-circle'}}
      />
  </BottomTab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop:40,
    
  },
});
