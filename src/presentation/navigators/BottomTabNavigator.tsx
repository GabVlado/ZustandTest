import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profie/ProfileScreen';
import SettingsScreen from '../settings/SettingsScreen';
import { useCounterStore } from '../store/counter-store';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {

    const count =  useCounterStore(state => state.count)

    return (
        <Tab.Navigator
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    title: `Counter ${count}`,
                }}
            />
        </Tab.Navigator>
    );
}

