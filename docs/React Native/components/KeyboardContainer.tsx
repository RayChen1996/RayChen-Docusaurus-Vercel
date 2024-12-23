import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  StatusBar,
} from 'react-native';
import type {KeyboardAvoidingViewProps} from 'react-native';
import React from 'react';

const _behavior: KeyboardAvoidingViewProps['behavior'] =
  Platform.OS === 'ios' ? 'padding' : 'height';

/** - 鍵盤區域容器 */
export default function KeyboardContainer({
  style,
  ...props
}: KeyboardAvoidingViewProps) {
  return (
    <KeyboardAvoidingView
      behavior={_behavior}
      {...props}
      keyboardVerticalOffset={StatusBar.currentHeight}
      style={StyleSheet.compose(styles.container, style)}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
