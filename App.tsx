import { ThemeProvider } from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito-sans';
import Routes from './src/routes';
import theme from './src/themes';

export default function App() {
  const [isFontLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {isFontLoaded ? <Routes /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
