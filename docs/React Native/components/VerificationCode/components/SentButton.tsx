import React from 'react';
import {useEffect, useMemo, useState} from 'react';
import {Button, ButtonText} from '@gluestack-ui/themed';
import {ButtonSpinner} from '@gluestack-ui/themed';

import timestampToTimeString from '../utils/timestampToTimeString';

/** - 發送按鈕 */
export default function SentButton({
  onPress,
  onTimeUp,
  timeLimitISO,
  loading,
}: {
  onPress: () => void;
  timeLimitISO: string | null;

  onTimeUp?: () => void;
  loading: boolean;
}) {
  const [timestamp, setTimestamp] = useState<null | number>(null);
  const isDisabled = Boolean(loading || timestamp);

  const _label = useMemo(() => {
    if (!timestamp) {
      return '發送';
    }
    return timestampToTimeString(timestamp);
  }, [timestamp]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timeLimitISO) {
      const limitTimestamp = new Date(timeLimitISO).valueOf();

      /** - 更新時間戳記 */
      function _updateTimestamp() {
        const nowTimestamp = Date.now().valueOf();
        setTimestamp(Math.max(0, limitTimestamp - nowTimestamp));
      }

      // 先執行一次刷新
      _updateTimestamp();

      if (limitTimestamp) {
        interval = setInterval(_updateTimestamp, 500);
      }
    }
    return () => {
      clearInterval(interval);
    };
  }, [timeLimitISO]);

  useEffect(() => {
    if (typeof timestamp === 'number' && timestamp <= 0) {
      onTimeUp?.();
      setTimestamp(null);
    }
  }, [timestamp, onTimeUp]);

  return (
    <Button isDisabled={isDisabled} onPress={onPress}>
      {loading ? <ButtonSpinner mr="$1" /> : null}
      <ButtonText fontFamily="$mono" fontWeight="$medium" fontSize="$sm">
        {_label}
      </ButtonText>
    </Button>
  );
}
