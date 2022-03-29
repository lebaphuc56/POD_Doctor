
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {
   createStackNavigator,
   TransitionPresets,

} from '@react-navigation/stack';
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
import AddFriend from './screens/user/AddFriends';
import SearchFriend from './screens/user/SearchFriend';
import DoctorDetail from './screens/people/DoctorDetail';
import UpdateContact from './screens/user/UpdateContact';
import SPO2 from './screens/user/SPO2';
import Test from './screens/user/TestFirebase';
import SurveyActivity from './screens/bottomtab/SurveyActivity';


const Stack = createStackNavigator();

const App = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="Splash"
            screenOptions={{ headerShown: false }}>

            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="SPO2" component={SPO2} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="OptScreen" component={OptScreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
            <Stack.Screen name="AgeGender" component={AgeGender} />
            <Stack.Screen name="HealthPeople" component={HealthPeople} options={{ ...TransitionPresets.SlideFromRightIOS }} />
            <Stack.Screen name="CalculateBMI" component={CalculateBMI} options={{ ...TransitionPresets.SlideFromRightIOS }} />
            <Stack.Screen name="CalculateBMIDetail" component={CalculateBMIDetail} options={{ ...TransitionPresets.SlideFromRightIOS }} />
            <Stack.Screen name="Location" component={Location} options={{ ...TransitionPresets.SlideFromRightIOS }} />
            <Stack.Screen name="EmergencyContact" component={EmergencyContact} options={{ ...TransitionPresets.SlideFromRightIOS }} />
            <Stack.Screen name="HomeActivity" component={HomeActivity} options={{ ...TransitionPresets.SlideFromRightIOS }} />
            <Stack.Screen name="Tab" component={Tab} options={{ ...TransitionPresets.SlideFromRightIOS }} />
            <Stack.Screen name="DetailDoctorUric" component={DetailDoctorUric} />
            <Stack.Screen name="AddFriend" component={AddFriend} />
            <Stack.Screen name="SearchFriend" component={SearchFriend}  options={{...TransitionPresets.SlideFromRightIOS}}/>
            <Stack.Screen name="DoctorDetail" component={DoctorDetail} options={{ ...TransitionPresets.SlideFromRightIOS }} />
            <Stack.Screen name="UpdateContact" component={UpdateContact} options={{ ...TransitionPresets.SlideFromRightIOS }} />
            <Stack.Screen name="Test" component={Test} />
            <Stack.Screen name="SurveyActivity" component={SurveyActivity} />
            
         </Stack.Navigator>

      </NavigationContainer>

   )
}
export default App;

