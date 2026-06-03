// Arquivo que iremos montar as nossas rotas e configurar nossas telas
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterAll from "../screens/RegisterAll";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return(
        <Stack.Navigator initialRouteName="login" screenOptions={{ headerShown: false}}>
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="registerall" component={RegisterAll}/>
            <Stack.Screen name="register" component={RegisterScreen}/>
        </Stack.Navigator>
    )
}