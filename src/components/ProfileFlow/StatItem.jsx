import {StyleSheet, Text, View} from 'react-native';
import Title, {titleTypes} from '../commons/Title';
const StatItem = ({title, value}) => {
  return (
    <View style={styles.container}>
      <Title text={value} theme={titleTypes.TEXT_14_700} />
      <Title text={title} theme={titleTypes.TEXT_14_400} />
    </View>
  );
};
export default StatItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
