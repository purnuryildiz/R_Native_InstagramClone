import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const buttonTypes = {
  PRIMARY: 'primary',
  OUTLINE: 'outline',
};

const styles = {
  primary: StyleSheet.create({
    background: {
      backgroundColor: colors.BLUE,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 7,
      borderRadius: 3,
    },
    text: {
      color: colors.WHITE,
      fontSize: 13,
      fontWeight: 'bold',
      lineHeight: 16,
    },
  }),
  outline: StyleSheet.create({
    background: {
      backgroundColor: colors.LIGHTGRAY,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 7,
      borderRadius: 3,
      borderWidth: 0.18,
      borderColor: colors.BLACK,
      flex: 1,
    },
    text: {
      color: colors.BLACK,
      fontSize: 13,
      fontWeight: 'bold',
      lineHeight: 16,
    },
  }),
};

export default styles;
