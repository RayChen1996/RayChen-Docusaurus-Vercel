import useMutationLikeForumPost from '@/apollo/hook/forums/useMutationLikeForumPost';
import useTokenStore from '@/zustand/useTokenStore';
import React, {useCallback, useEffect, useState} from 'react';

export interface LikeForumPostCallbackType {
  /** - 按讚數 */
  likeCount: number;
  /** - 已按讚 */
  liked: boolean;
  /** - 讀取中 */
  loading: boolean;
  onPress: () => void;
  /** - 禁用功能 */
  disabled: boolean;
}

export interface LikeForumPostProps {
  /** - ForumPost */
  id?: string;
  /** - 按讚數 */
  likeCount?: number;
  /** - 已按讚 */
  liked?: boolean;
  render?: (cb: LikeForumPostCallbackType) => React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

/** - 按讚或討論區發言或收回讚 */
export default function LikeForumPost({
  id,
  likeCount,
  liked,
  disabled,
  loading,
  render,
}: LikeForumPostProps) {
  const hasToken = useTokenStore(
    useCallback(state => Boolean(state.token), []),
  );
  const [currentLiked, setCurrentLiked] = useState(false);
  const [mutation, {loading: mutating}] = useMutationLikeForumPost({
    onCompleted(params) {
      if (params?.likeForumPost?.success) {
        setCurrentLiked(state => !state);
      }
    },
  });
  const _loading = Boolean(mutating || loading);
  const _disabled = Boolean(disabled) || _loading;

  useEffect(() => {
    if (typeof liked === 'boolean') {
      setCurrentLiked(liked);
    }
  }, [liked]);

  const onPress = useCallback(() => {
    if (id && hasToken && !_disabled) {
      mutation({variables: {id}});
    }
  }, [id, mutation, _disabled, hasToken]);

  return (
    <>
      {render?.({
        likeCount: Math.max(
          0,
          [likeCount || 0, currentLiked ? 1 : 0, liked ? -1 : 0].reduce(
            (p, c) => p + c,
            0,
          ),
        ),
        liked: currentLiked,
        loading: _loading,
        disabled: _disabled,
        onPress,
      }) ?? null}
    </>
  );
}
