import {StyleSheet} from 'react-native';
import {COLORS} from '../../lib/constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#bdc0c6',
    paddingVertical: 15,
  },
  text: {
    color: COLORS.DARK,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
