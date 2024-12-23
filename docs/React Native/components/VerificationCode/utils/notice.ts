import {Alert} from 'react-native';
import type {AlertButton} from 'react-native';

/** - 簡易包裝`Alert` */
export default function notice(
  params: string,
  onPress?: AlertButton['onPress'],
) {
  return Alert.alert('通知', params, [
    {text: '確認', style: 'default', onPress},
  ]);
}
