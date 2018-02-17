import { StackNavigator } from 'react-navigation';
import ShoppingList from './containers/shoppingList';

const AppNavigator = new StackNavigator(
  {
    ShoppingList: { screen: ShoppingList },
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      header: null,
    },
  },
);

export default AppNavigator;
