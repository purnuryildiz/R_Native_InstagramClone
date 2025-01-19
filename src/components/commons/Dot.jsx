import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const Dot = () => {
  return <View style={styles.dot} />;
};

export default Dot;

const styles = StyleSheet.create({
  dot: {
    backgroundColor: colors.RED,
    width: 11,
    height: 11,
    borderRadius: 99,
    borderWidth: 2,
    borderColor: colors.WHITE,
    position: 'absolute',
    left: 18,
    top: 0,
    zIndex: 1000,
  },
});
