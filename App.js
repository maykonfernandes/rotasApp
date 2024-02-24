import { StyleSheet, Text, View, Button } from "react-native";

//IMPORT STACK NAVIGATION
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//CREATE A STACK NAVIGATOR INSTANCE
// it allow us to use comands to define app navigation
const Stack = createNativeStackNavigator;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Hello! This is my new project</Text>
      <Button title="Sobre" onPress={() => navigation.navigate ("Sobre")} />
    </View>
  );
}

function Sobre() {
  return (
    <View style={styles.container}>
      <Text>Sobre</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});