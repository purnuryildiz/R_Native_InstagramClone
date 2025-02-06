import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-svg';
import CustomButton from '../CustomButtons/CustomButton';
import {Frame6} from '../../assets/icons';
import {colors} from '../../constants/colors';

const PressableIcon = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Frame6 />
    </TouchableOpacity>
  );
};

export default PressableIcon;

const styles = StyleSheet.create({
  container: {
    padding: 7,
    backgroundColor: colors.LIGHTGRAY,
    borderWidth: 0.18,
    borderColor: colors.BLACK,
    borderRadius: 3,
  },
});
