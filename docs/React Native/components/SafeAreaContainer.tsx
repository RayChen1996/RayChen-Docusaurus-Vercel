import {createElement} from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import type {ViewProps} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {SafeAreaViewProps} from 'react-native-safe-area-context';

export interface SafeAreaContainerProps extends SafeAreaViewProps, ViewProps {}

/** - 依照裝置切換組件 */
const WrapperComponent = Platform.OS === 'ios' ? SafeAreaView : View;

/** - 安全視圖區域容器 */
export default function SafeAreaContainer({
  style,
  ...props
}: SafeAreaContainerProps) {
  return createElement(WrapperComponent, {
    ...props,
    style: StyleSheet.compose(styles.container, style),
  });
}

/** - 基本樣式 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
