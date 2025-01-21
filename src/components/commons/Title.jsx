import {Text, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const titleTypes = {
  TEXT_12_400_18: 'TEXT_12_400_18',
  TEXT_13_400_Gray: 'TEXT_13_400_Gray',
  TEXT_13_400_16: 'TEXT_13_400_16',
  TEXT_13_400_16_BLUE_2: 'TEXT_13_400_16_BLUE_2',
  TEXT_13_700: 'TEXT_13_700',
  TEXT_13_700_16_BLUE_2: 'TEXT_13_700_16_BLUE_2',
  TEXT_14_400: 'TEXT_14_400',
  TEXT_14_700: 'TEXT_14_700',
  TEXT_16_700: 'TEXT_16_700',
  TEXT_22_700_40: 'TEXT_22_700_40',
};

const Title = ({theme = titleTypes.TEXT_12_400_18, text}) => {
  return <Text style={styles[theme]}> {text} </Text>;
};

export default Title;
export const styles = {
  TEXT_12_400_18: StyleSheet.create({
    color: colors.WHITE,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
  }),
  TEXT_13_700: StyleSheet.create({
    color: colors.BLACK,
    fontSize: 13,
    fontWeight: '700',
  }),
  TEXT_13_400_Gray: StyleSheet.create({
    color: colors.GRAY,
    fontSize: 13,
    fontWeight: '400',
  }),
  TEXT_13_400_16: StyleSheet.create({
    color: colors.BLACK,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 16,
  }),
  TEXT_13_400_16_BLUE_2: StyleSheet.create({
    color: colors.BLUE_2,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 16,
  }),
  TEXT_13_700_16_BLUE_2: StyleSheet.create({
    color: colors.BLUE_2,
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 16,
  }),

  TEXT_14_400: StyleSheet.create({
    color: colors.BLACK,
    fontSize: 14,
    fontWeight: '400',
  }),
  TEXT_14_700: StyleSheet.create({
    color: colors.BLACK,
    fontSize: 14,
    fontWeight: '700',
  }),
  TEXT_16_700: StyleSheet.create({
    fontSize: 16,
    fontWeight: '700',
    color: colors.BLACK,
  }),
  TEXT_22_700_40: StyleSheet.create({
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 40,
    color: colors.BLACK,
  }),
};
