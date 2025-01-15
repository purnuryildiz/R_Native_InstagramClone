import {View, Text, StyleSheet} from 'react-native';
import {
  AddFeeds,
  ChevronDown,
  Heart,
  IGLogo,
  Messages,
} from '../../assets/icons';
const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.leftBox}>
        <IGLogo />
        <ChevronDown />
      </View>
      <View style={styles.rightBox}>
        <Heart />
        <Messages />
        <AddFeeds />
      </View>
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
  },
  leftBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  rightBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },
});
