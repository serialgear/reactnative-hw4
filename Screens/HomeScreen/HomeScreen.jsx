import PostsScreen from "../PostsScreen/PostsScreen";
import CreatePostsScreen from "../PostsScreen/CreatePostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";

import { StyleSheet, View } from "react-native";

import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tabs = createBottomTabNavigator();

export default function HomeScreen({ navigation }) {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Posts",
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: "#E8E8E8",
          },
          headerTitleStyle: {
            fontFamily: "RobotoMedium",
            fontSize: 17,
          },
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Feather name="grid" size={24} color={color} />
          ),
          tabBarActiveTintColor: "#FF6C00",
          tabBarInActiveTintColor: "#212121",

          headerRight: () => (
            <MaterialIcons
              name="logout"
              size={24}
              color="#BDBDBD"
              style={{ marginRight: 16 }}
              onPress={() => navigation.navigate("Login")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: "Create Post",
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: "#E8E8E8",
          },
          headerTitleStyle: {
            fontFamily: "RobotoMedium",
            fontSize: 17,
          },
          tabBarLabel: "",
          tabBarIcon: () => (
            <View style={styles.addBtn}>
              <Ionicons name="add-outline" size={24} color="#fff" />
            </View>
          ),
          tabBarActiveTintColor: "#FF6C00",
          tabBarInActiveTintColor: "#212121",
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: "#E8E8E8",
          },
          headerTitleStyle: {
            fontFamily: "RobotoMedium",
            fontSize: 17,
          },
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
          tabBarActiveTintColor: "#FF6C00",
          tabBarInActiveTintColor: "#212121",
        }}
      />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  addBtn: {
    justifyContent: "center",
    alignItems: "center",

    width: 70,
    height: 40,
    marginTop: 9,
    borderRadius: 20,

    backgroundColor: "#FF6C00",
  },
});
