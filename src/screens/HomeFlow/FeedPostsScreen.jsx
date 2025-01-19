import {View, Text} from 'react-native';
import Header from '../../components/commons/Header';
import {routes} from '../../constants/routes';
import Avatar from '../../components/Avatar/Avatar';
const FeedPostsScreen = () => {
  return (
    <View>
      <Header screenName={routes.FEED_POSTS_SCREEN} />
    </View>
  );
};

export default FeedPostsScreen;
