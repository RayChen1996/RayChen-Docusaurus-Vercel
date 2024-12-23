import {create} from 'zustand';
import {combine, persist, createJSONStorage} from 'zustand/middleware';

import zustandStorage from './zustandStorage';

interface InitialStateType {
  token: string;
}

const initialState = {
  token: '',
};

/** - 登入憑證 */
const useTokenStore = create(
  persist(
    combine(initialState, (set, get) => ({
      async setToken(token: InitialStateType['token']) {
        if (token && typeof token === 'string') {
          set({token});
        }
        return Boolean(get().token);
      },
      async removeToken() {
        set({token: initialState.token});
        return Boolean(get().token);
      },
    })),
    {
      name: '@token',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);

export default useTokenStore;
