import { useTheme } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppRoutes from './app.routes';
import { StatusBar } from 'react-native';
import { View } from 'react-native';

export default function Routes() {
  const { COLORS } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.GRAY_7 }}>
      <StatusBar barStyle='dark-content' backgroundColor={COLORS.GRAY_7} />
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
}
