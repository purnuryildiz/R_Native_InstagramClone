import {View, Text, StyleSheet, Image} from 'react-native';
import {StoryRing} from './StoryRing';
import normalize from '../../utils/responsiveFunction';

const Avatar = ({image}) => {
  return (
    <View style={styles.container}>
      <StoryRing />
      <Image
        style={styles.avatar}
        source={{
          uri: image,
        }}
      />
    </View>
  );
};
export default Avatar;

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center'},
  avatar: {
    width: normalize(76),
    height: normalize(76),
    borderRadius: normalize(99),
    position: 'absolute',
    marginVertical: normalize(7.11),
    marginHorizontal: normalize(7.11),
  },
});
