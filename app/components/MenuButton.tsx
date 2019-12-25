import * as React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import RText, { RTextStyles } from '@components/RText';

interface IProps {
  onPress: (event: GestureResponderEvent) => void;
  children: React.ReactNode;
}

export default function MenuButton({ onPress, children }: IProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.button}>
          <RText type={RTextStyles.subtitle1}>{children}</RText>
          <Icon name="right" size={16} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

interface Styles {
  container: ViewStyle;
  button: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    height: 64
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 24
  },
});
