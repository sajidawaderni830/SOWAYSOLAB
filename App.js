import { NavigationContainer } from "@react-navigation/native";

import React, { useState, useEffect } from "react";
import { firebase } from './config';
import Login from "./src/Login"
import Registration from "./src/Registration";
import Dashboard from "./src/Dashboard";
import Header from "./src/components/Header";
import { createStackNavigator } from '@react-navigation/stack'
import Home from "./src/screens/Home"
import ChatStackNavigator from './src/navigations/Navigator';
const Stack = createStackNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);

  }
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return () => unsubscribe();
  }, []);
  if (initializing) return null;

  if (!user) {
    return (


      <Stack.Navigator>

        <Stack.Screen name="Home" component={Home}
          options={{
            headerTitle: () => <Header name="Dashboard" />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: '#00e4d0',
              shadowColor: '#000',
              elevation: 25
            }
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: () => <Header name="Bug Ninza" />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: '#00e4d0',
              shadowColor: '#000',
              elevation: 25
            }
          }} />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerTitle: () => <Header name="Bug Ninza" />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: '#00e4d0',
              shadowColor: '#000',
              elevation: 25
            }
          }} />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerTitle: () => <Header name="Dashboard" />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: '#00e4d0',
              shadowColor: '#000',
              elevation: 25
            }
          }} />



      </Stack.Navigator>
    );
  } 
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTitle: () => <Header name="Dashboard" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: '#00e4d0',
            shadowColor: '#000',
            elevation: 25
          }
        }} />


    </Stack.Navigator>
  );
}
export default () => {


  return (
    <NavigationContainer>

      <App />
    </NavigationContainer>
  )
}