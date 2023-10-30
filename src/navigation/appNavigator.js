import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FirstScreen } from '../screens/first-screen/firstScreen';
import { SecondScreen } from '../screens/second-screen/secondScreen';
import { ThirdScreen } from '../screens/third-screen/thirdScreen';


const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
    return (
        <NavigationContainer  >
            <Stack.Navigator initialRouteName={"FirstScreen"} screenOptions={{ headerShown: false }} >
                <Stack.Screen name="FirstScreen" component={FirstScreen} />
                <Stack.Screen name="SecondScreen" component={SecondScreen} />
                <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}