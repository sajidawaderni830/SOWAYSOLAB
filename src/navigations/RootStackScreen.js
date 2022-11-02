import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';

const RootStack = createStackNavigator();




const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>

        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="SignIn" component={SignInScreen} />
        <RootStack.Screen name="SignUp" component={SignUpScreen} />
        <RootStack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <RootStack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
        />
        <RootStack.Screen name="NewPassword" component={NewPasswordScreen} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Register" component={Register} />

    </RootStack.Navigator>
);

export default RootStackScreen;