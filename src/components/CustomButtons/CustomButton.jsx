import {Text, TouchableOpacity} from 'react-native';
import styles, {buttonTypes} from './CustomButton.style';

const CustomButton = ({title, theme = buttonTypes.PRIMARY}) => {
  const currentStyle = styles[theme];

  return (
    <TouchableOpacity style={currentStyle.background}>
      <Text style={currentStyle.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
