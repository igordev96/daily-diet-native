import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Overview from '../screens/Overview';
import NewMeal from '../screens/NewMeal';
import Feedback from '../screens/Feedback';

export default function AppRoutes() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name='home' component={Home} />
      <Screen name='overview' component={Overview} />
      <Screen name='newmeal' component={NewMeal} />
      <Screen name='feedback' component={Feedback} />
    </Navigator>
  );
}
