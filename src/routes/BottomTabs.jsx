import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeFlow from './HomeFlow';
import SearchScreen from '../screens/SearchFlow/SearchScreen';
import ReelsScreen from '../screens/ReelsFlow/ReelsScreen';
import MarketsScreen from '../screens/MarketsFlow/MarketsScreen';
import ProfileScreen from '../screens/ProfileFlow/ProfileScreen';
import {routes} from '../constants/routes';

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  const {HOME_FLOW, SEARCH_FLOW, REELS_FLOW, MARKETS_FLOW, PROFILE_FLOW} =
    routes;
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={HOME_FLOW} component={HomeFlow} />
      <Tab.Screen name={SEARCH_FLOW} component={SearchScreen} />
      <Tab.Screen name={REELS_FLOW} component={ReelsScreen} />
      <Tab.Screen name={MARKETS_FLOW} component={MarketsScreen} />
      <Tab.Screen name={PROFILE_FLOW} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
