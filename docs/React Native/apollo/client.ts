import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

import useTokenStore from '@/zustand/useTokenStore';
import {offsetLimitPagination} from '@apollo/client/utilities';

export const uri =
  process.env.NODE_ENV === 'production'
    ? 'https://current--east279.apollographos.net/graphql'
    : 'https://current--east279.apollographos.net/graphql';

const httpLink = createHttpLink({
  uri,
});

const authLink = setContext((_, {headers}) => {
  const token = useTokenStore.getState().token;
  const authorization = token ? `Bearer ${token}` : '';
  return {
    headers: {
      ...headers,
      authorization,
    },
  };
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        members: offsetLimitPagination(),
        partners: offsetLimitPagination(),
        rewards: offsetLimitPagination(['enabled']),
        posts: offsetLimitPagination(),
        videos: offsetLimitPagination(),
        forums: offsetLimitPagination(),
        partnerManagers: offsetLimitPagination(),
        rewardCategories: offsetLimitPagination(),
      },
    },
    Member: {
      fields: {
        moderatedForums: offsetLimitPagination(),
        forumPosts: offsetLimitPagination(),
        likedForumPosts: offsetLimitPagination(),
        partnerManagers: offsetLimitPagination(),
        rewardRedemptions: offsetLimitPagination([
          'categoryId',
          'rewardId',
          'expired',
          'used',
        ]),
      },
    },
    Forum: {
      fields: {
        threads: offsetLimitPagination(),
        announcements: offsetLimitPagination(),
      },
    },
    ForumThread: {
      fields: {
        posts: offsetLimitPagination(),
      },
    },
    Partner: {
      fields: {
        rewards: offsetLimitPagination(['enabled', 'categoryId']),
        rewardCategories: offsetLimitPagination(),
        managers: offsetLimitPagination(),
      },
    },
  },
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

export default client;
