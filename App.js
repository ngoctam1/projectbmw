import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import DangKy from './dangky';
import Lienhe from "./lienhe"
import Series3 from "./Series3"
import Series4GC from "./Series4"
import Series4C from "./Series4C"
import Series5 from "./Series5"
import Series7 from "./Series7"
import Series8GC from "./Series8GC"
import SeriesX3 from "./SeriesX3"
import SeriesX4 from "./SeriesX4"
import SeriesX5 from "./SeriesX5"
import SeriesX6 from "./SeriesX6"
import SeriesX7 from "./SeriesX7"
import SeriesZ4 from "./SeriesZ4"
import SeriesXM from "./SeriesXM"
import SeriesiX3 from "./SeriesiX3"
import Seriesi4 from "./Seriesi4"
import Seriesi7 from "./Seriesi7"
import Digital from "./digi"


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{ headerShown: false }}/>
        <Tab.Screen name="DangKy" component={DangKy} 
        options={{ headerShown: false }}/>
        <Tab.Screen name="Lienhe" component={Lienhe} 
        options={{ headerShown: false }}/>
        <Tab.Screen name="Series3" component={Series3} 
        options={{ headerShown: false }}/>
        <Tab.Screen name="Series4GC" component={Series4GC} 
        options={{ headerShown: false }}/>
        <Tab.Screen name="Series5" component={Series5} 
        options={{ headerShown: false }}/>
        <Tab.Screen name="Series4C" component={Series4C} 
        options={{ headerShown: false }}/>
        <Tab.Screen name="Series7" component={Series7} 
        options={{ headerShown: false }}/>
        <Tab.Screen name="Series8GC" component={Series8GC} 
        options={{ headerShown: false }}/>
        <Tab.Screen name="SeriesX3" component={SeriesX3} 
        options={{ headerShown: false }}/>
        <Tab.Screen name="SeriesX4" component={SeriesX4} 
        options={{ headerShown: false }}/>
        <Tab.Screen name="SeriesX5" component={SeriesX5}
        options={{ headerShown: false }}/>
        <Tab.Screen name="SeriesX6" component={SeriesX6} 
        options={{ headerShown: false }}/>
        <Tab.Screen name="SeriesX7" component={SeriesX7}
        options={{ headerShown: false }}/>
        <Tab.Screen name="SeriesZ4" component={SeriesZ4} 
        options={{ headerShown: false }}/>
        <Tab.Screen name="SeriesXM" component={SeriesXM}
        options={{ headerShown: false }}/>
        <Tab.Screen name="SeriesiX3" component={SeriesiX3} 
        options={{ headerShown: false }}/>
        <Tab.Screen name="Seriesi4" component={Seriesi4}
        options={{ headerShown: false }}/>
        <Tab.Screen name="Seriesi7" component={Seriesi7}
        options={{ headerShown: false }}/>
        <Tab.Screen name="Digital" component={Digital}
        options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
