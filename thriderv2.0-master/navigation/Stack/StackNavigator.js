import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
import Home from '../../screens/Home'
import Track from '../../screens/Track'

// Screens
// import GymScreen from "../../screens/Gym/GymMainScreen";
// import GymDetailsScreen from "../../screens/Gym/GymDetailScreen";
// import OrderScreen from "../../screens/ShopOrderScreen";
// import OrderTrackScreen from "../../screens/OrderTrackScreen";
// import CompareGymScreen from "../../screens/CompareGymScreen";
// import CartScreen from "../../screens/CartScreen";
// import ProfileScreen from "../../screens/ProfileScreen";
// import CompareScreen from "../../screens/CompareScreen";
// import Landing from "../../screens/Landing";

// import AttendanceScreen from "../../screens/AttendanceScreen";
// import PastOrderScreen from "../../screens/Shop/PastOrdersScreen";
// import WishListScreen from "../../screens/Shop/SubOptions/AllItems";
// import FitnessGuideScreen from "../../screens/CatalogueScreen";
// import BookingScreen from "../../screens/BookingScreen";

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Track" component={Track}/>

     {/* <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Attendance" component={AttendanceScreen} />
      <Stack.Screen name="PastOrder" component={PastOrderScreen} />
      <Stack.Screen name="Wishlist" component={WishListScreen} />
      <Stack.Screen name="Fitness" component={FitnessGuideScreen} />
      <Stack.Screen name="Booking" component={BookingScreen} />
      <Stack.Screen name="GymScreen" component={GymScreen} />
      <Stack.Screen name="GymDetailsScreen" component={GymDetailsScreen} />
      <Stack.Screen name="Compare" component={CompareGymScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Order" component={OrderScreen} />
      <Stack.Screen name="OrderTrack" component={OrderTrackScreen} />
      <Stack.Screen name="CompareScreen" component={CompareScreen} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
