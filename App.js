import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: "#f0e1ff",
          drawerActiveTintColor: "#3c0a6b",
          // drawerStyle: { backgroundColor: "#ccc" },
        }}
      >
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            // headerStyle: { backgroundColor: "#3c0a6b" },
            // headerTintColor: "white",
            drawerLabel: "Welcome Screen",
            drawerIcon: ({ color }) => <Ionicons name="home" color={color} size={18} />,
          }}
        />
        <Drawer.Screen name="User" component={UserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
