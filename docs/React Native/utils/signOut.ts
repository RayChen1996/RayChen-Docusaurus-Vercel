import {Alert} from 'react-native';

import useTokenStore from '@/zustand/useTokenStore';
import apolloClient from '@/apollo/client';

/** - 處理登出事項 */
export function signOut() {
  Alert.alert('通知', '確定登出？', [
    {
      text: '確定',
      style: 'destructive',
      onPress: () => {
        Promise.all([
          apolloClient.resetStore(),
          useTokenStore.getState().removeToken(),
        ]);
      },
    },
    {text: '取消', style: 'cancel'},
  ]);
}
