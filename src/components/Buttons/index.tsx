import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type PrimaryButtonProps = {
  text: string;
  onPress: any;
  disabled?: boolean;
};

export const PrimaryButton = ({
  onPress,
  text,
  disabled,
}: PrimaryButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.primaryButtonContainer}
      disabled={disabled}>
      <LinearGradient
        colors={['#911F8E', '#FD7014']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.background}>
        <Text style={styles.primaryButtonText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  primaryButtonContainer: {
    width: '100%',
    height: 50,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
