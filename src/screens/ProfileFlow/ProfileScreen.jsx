import {View, Text, StyleSheet, Image} from 'react-native';
import Header from '../../components/commons/Header';
import {routes} from '../../constants/routes';
import Avatar from '../../components/Avatar/Avatar';
import StatItem from '../../components/ProfileFlow/StatItem';
import Title, {titleTypes} from '../../components/commons/Title';
import {colors} from '../../constants/colors';
import normalize from '../../utils/responsiveFunction';
const source =
  'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400';
const ProfileScreen = () => {
  return (
    <View>
      {/* Header */}
      <Header screenName={routes.PROFILE_SCREEN} isMyProfile={true} />
      {/* Avatar and Stat */}
      <View style={styles.container}>
        <Avatar image={source} />
        <View style={styles.statContainer}>
          <StatItem title={'Posts'} value={'1,234'} />
          <StatItem title={'Followers'} value={'5,678'} />
          <StatItem title={'Following'} value={'9,101'} />
        </View>
      </View>
      {/* Username and Info */}
      <View style={styles.bio}>
        <View style={styles.usernameAndInfo}>
          <Title text={'username'} theme={titleTypes.TEXT_13_700} />
          <Title
            text={'Category/Genre text'}
            theme={titleTypes.TEXT_13_400_Gray}
          />
          <Title
            text={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
            }
            theme={titleTypes.TEXT_13_400_16}
          />
          <Title
            text={'Link goes here'}
            theme={titleTypes.TEXT_13_700_16_BLUE_2}
          />
        </View>
        {/* Followers */}
        <View>
          <View style={styles.images}>
            <Image source={{uri: source}} style={styles.image} />
            <Image
              source={{uri: source}}
              style={[
                styles.image,
                {position: 'absolute', left: normalize(13), zIndex: -1},
              ]}
            />
            <Image
              source={{uri: source}}
              style={[
                styles.image,
                {position: 'absolute', left: normalize(26), zIndex: -2},
              ]}
            />
          </View>
          <View></View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: normalize(12),
    justifyContent: 'space-between',
  },

  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    gap: normalize(24),
  },
  bio: {
    paddingHorizontal: normalize(12),
    gap: normalize(12),
    paddingTop: normalize(6),
    paddingBottom: normalize(10),
  },
  usernameAndInfo: {
    gap: normalize(3),
  },
  images: {flexDirection: 'row'},
  image: {
    width: normalize(26),
    height: normalize(26),
    borderRadius: normalize(99),
    borderWidth: normalize(1.5),
    borderColor: colors.WHITE,
  },
});
