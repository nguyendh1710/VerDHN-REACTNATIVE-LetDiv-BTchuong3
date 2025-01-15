import { Pressable, Text } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import styles from './tab-item.styles';

const TabItem = ({
  selected,
  icon,
  label,
  onPress
}) => (
  <Pressable
    style={styles.container}
    onPress={onPress}
  >
    <Ionicons
      name={icon}
      size={30}
      color={selected ? '#1c7ed6' : '#495057'}
    />
    <Text style={[styles.label, selected && styles.labelHighlight]}>
      {label}
    </Text>
  </Pressable>
);

export default TabItem;