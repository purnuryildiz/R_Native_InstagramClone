import {View, Text, StyleSheet} from 'react-native';
import {
  AddFeeds,
  BackArrow,
  ChevronDown,
  Heart,
  IGLogo,
  MenuIcon,
  Messages,
  NotificationIcon,
  OptionsIcon,
  VerifiedBadge,
} from '../../assets/icons';
import Badge from './Badge';
import Dot from './Dot';
import {colors} from '../../constants/colors';
import {routes} from '../../constants/routes';
import Title, {titleTypes} from './Title';
const Header = ({screenName, isMyProfile}) => {
  const {FEED_POSTS_SCREEN, PROFILE_SCREEN} = routes;
  return (
    <View style={styles.header}>
      {/* LEFT BOX */}
      {screenName == FEED_POSTS_SCREEN ? (
        <View style={styles.leftBox}>
          <IGLogo />
          <ChevronDown />
        </View>
      ) : isMyProfile ? (
        <View style={styles.myProfileLeftBox}>
          <Title text={'username'} theme={titleTypes.TEXT_22_700_40} />
          <Badge value={'10'} />
        </View>
      ) : (
        <View>
          <BackArrow />
        </View>
      )}

      {/* MIDDLE BOX */}

      {screenName == routes.PROFILE_SCREEN && isMyProfile == false && (
        <View style={styles.middleBox}>
          <Title text={'username'} theme={titleTypes.TEXT_16_700} />
          <VerifiedBadge />
        </View>
      )}

      {/* RIGHT BOX */}
      {screenName == FEED_POSTS_SCREEN ? (
        <View style={styles.rightBox}>
          <Heart />
          <Dot />
          <Messages />
          <Badge customStyle={styles.badge} value={'10'} />
          <AddFeeds />
        </View>
      ) : isMyProfile ? (
        <View style={styles.rightBox}>
          <AddFeeds />
          <MenuIcon />
        </View>
      ) : (
        <View style={styles.rightBox}>
          <NotificationIcon />
          <OptionsIcon />
        </View>
      )}
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    paddingVertical: 5,
    alignItems: 'center',
  },
  leftBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  myProfileLeftBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  middleBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },

  badge: {
    position: 'absolute',
    left: 68,
    top: -5,
    zindex: 1000,
  },
});
