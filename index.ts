import { registerRootComponent } from 'expo';
import home from './src/screens/home'
import App from './src/screens/TelaInicializacao/App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(home);
registerRootComponent(App);
