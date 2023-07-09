import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Screens/LoginSignup/Login/Login';
import Signup_EnterEmail from './src/Screens/LoginSignup/Signup/Signup_EnterEmail';
import Signup_AccountCreated from './src/Screens/LoginSignup/Signup/Signup_AccountCreated';
import Signup_ChoosePassword from './src/Screens/LoginSignup/Signup/Signup_ChoosePassword';
import Signup_EnterVerificationCode from './src/Screens/LoginSignup/Signup/Signup_EnterVerificationCode';

import Signup_ChooseUsername from './src/Screens/LoginSignup/Signup/Signup_ChooseUsername';

import ForgotPassword_EnterEmail from './src/Screens/LoginSignup/ForgotPassword/ForgotPassword_EnterEmail';

import ForgotPassword_EnterVerificationCode from './src/Screens/LoginSignup/ForgotPassword/ForgotPassword_EnterVerificationCode';

import ForgotPassword_ChoosePassword from './src/Screens/LoginSignup/ForgotPassword/ForgotPassword_ChoosePassword';

import ForgotPassword_AccountRecovered from './src/Screens/LoginSignup/ForgotPassword/ForgotPassword_AccountRecovered';
import Mainpage from './src/Screens/Mainpage/Mainpage';
import All_Chats from './src/Screens/ChatSection/All_Chats';
import SearchUserPage from './src/Screens/Mainpage/SearchUserPage';
import NotificationPage from './src/Screens/Mainpage/NotificationPage';
import My_UserProfile from './src/Screens/Profile/My_UserProfile';
import Settings1 from './src/Screens/Settings/Settings1';
import ChangePassword from './src/Screens/Settings/ChangePassword';
import EditProfile from './src/Screens/Settings/EditProfile';
import ChangeUsername from './src/Screens/Settings/ChangeUsername';
import ChangeDescription from './src/Screens/Settings/ChangeDescription';
import UploadProfilePicture from './src/Screens/Settings/UploadProfilePicture';
import AddPost from './src/Screens/Mainpage/AddPost';
import Other_UserProfile from './src/Screens/Profile/Other_UserProfile';
import MessagePage from './src/Screens/ChatSection/MessagePage';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        animation: 'slide_from_right'
      }}>
        <Stack.Screen name="MainPage" component={Mainpage} />
        <Stack.Screen name="Login" component={Login}
          options={{
            // animation: 'slide_from_right'
          }}

        />
        <Stack.Screen name="Signup_EnterEmail" component={Signup_EnterEmail} />
        <Stack.Screen name="Signup_EnterVerificationCode" component={Signup_EnterVerificationCode} />

        <Stack.Screen name="Signup_ChooseUsername" component={Signup_ChooseUsername} />
        <Stack.Screen name="Signup_ChoosePassword" component={Signup_ChoosePassword} />

        <Stack.Screen name="Signup_AccountCreated" component={Signup_AccountCreated} />


        <Stack.Screen name="ForgotPassword_EnterEmail" component={ForgotPassword_EnterEmail} />
        <Stack.Screen name="ForgotPassword_EnterVerificationCode" component={
          ForgotPassword_EnterVerificationCode
        } />
        <Stack.Screen name="ForgotPassword_ChoosePassword" component={ForgotPassword_ChoosePassword} />
        <Stack.Screen name="ForgotPassword_AccountRecovered" component={ForgotPassword_AccountRecovered} />

        <Stack.Screen name="All_Chats" component={All_Chats}

          options={{
            animation: 'slide_from_left'
          }}
        />

        <Stack.Screen name="SearchUserPage" component={SearchUserPage}

          options={{
            animation: 'slide_from_bottom'
          }}
        />

        <Stack.Screen name="NotificationPage" component={NotificationPage}
        />

        <Stack.Screen name="My_UserProfile" component={My_UserProfile}

          options={{
            animation: 'slide_from_left'
          }}
        />
        <Stack.Screen name="Settings_1" component={Settings1} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="ChangeUsername" component={ChangeUsername} />
        <Stack.Screen name="ChangeDescription" component={ChangeDescription} />
        <Stack.Screen name='UploadProfilePicture' component={UploadProfilePicture} />

        <Stack.Screen name='AddPost' component={AddPost} />
        <Stack.Screen name="Other_UserProfile" component={Other_UserProfile} />
        <Stack.Screen name="MessagePage" component={MessagePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});