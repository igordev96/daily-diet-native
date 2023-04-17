import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

export default function AppRoutes() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name='home' component={Home} />
    </Navigator>
  );
}
