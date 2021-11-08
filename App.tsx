
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screens/user/SplashScreen';
import Login from './screens/user/LoginScreen';
import OptScreen from './screens/user/OtpScreen';
import Register from './screens/user/RegisterScreen';
import AgeGender from './screens/people/AgeGender';
import HealthPeople from './screens/people/HealthPeople';
import CalculateBMI from './screens/people/CalculateBMI';
import CalculateBMIDetail from './screens/people/CalcutaleDetail';
import Location from './screens/people/Location';
import EmergencyContact from './screens/people/EmergencyContact';
import HomeActivity from './screens/user/HomeActivity';
import Tab from './navigation/Tab';
import DetailDoctorUric from './screens/detailScreen/DetailDoctorUric';







const Stack = createNativeStackNavigator();

const App =()=>{
 return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
    <Stack.Screen name ="Splash" component={Splash}  />
    <Stack.Screen name ="Login" component={Login}  />
    <Stack.Screen name ="Register" component={Register}  />
    <Stack.Screen name ="OptScreen" component={OptScreen}  />
    <Stack.Screen name ="AgeGender" component={AgeGender}  />
    <Stack.Screen name ="HealthPeople" component={HealthPeople}  />
    <Stack.Screen name ="CalculateBMI" component={CalculateBMI}  />
    <Stack.Screen name ="CalculateBMIDetail" component={CalculateBMIDetail}  />
    <Stack.Screen name ="Location" component={Location}  />
    <Stack.Screen name ="EmergencyContact" component={EmergencyContact}  />
    <Stack.Screen name ="HomeActivity" component={HomeActivity}  />
    <Stack.Screen name ="Tab" component={Tab}  />
    <Stack.Screen name ="DetailDoctorUric" component={DetailDoctorUric}  />
    


   </Stack.Navigator>
  
  </NavigationContainer>

 )
}
export default App;

