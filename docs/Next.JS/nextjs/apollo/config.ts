import { InMemoryCache } from "@apollo/experimental-nextjs-app-support";
import { HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

import { getSession } from "@/lib";
import generateOffsetLimitPagination from "./utils/generateOffsetLimitPagination";

/** - apollo網址 */
const uri = "https://current--goodla.apollographos.net/graphql";

/** - 快取 */
export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: generateOffsetLimitPagination({
        states: [],
        individualAccounts: ["cdl", "sorting"],
        companies: [],
        companyProfiles: [
          "companyId",
          "accountLevel",
          "title",
          "status",
          "request",
        ],
        companyDocuments: ["companyId", "type"],
        vehicles: [],
        products: ["categoryId", "typeId"],
        bundles: [],
        productCategories: [],
        productTypes: ["categoryId"],
        carts: [],
        orders: ["status"],
        tasks: [],
        subtasks: ["taskId"],
        branches: [],
        agents: [],
      }),
    },
    IndividualAccount: {
      fields: generateOffsetLimitPagination({
        companyProfiles: ["accountLevel", "title", "status", "request"],
        orders: ["status"],
      }),
    },
    Company: {
      fields: generateOffsetLimitPagination({
        profiles: ["accountLevel", "title", "status"],
        documents: ["type"],
        vehicles: [],
        orders: ["status"],
      }),
    },
  },
});

/** - 資料庫連結 */
const httpLink = new HttpLink({ uri });

/** - 驗證連結 */
const authLink = setContext(async (_, { headers }) => {
  const session = await getSession();
  const token = session?.token;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

/** - 錯誤回報連結 */
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    for (const { message, locations, path } of graphQLErrors) {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
    }
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

/** - 客戶端連結 */
export const links = [errorLink, authLink, httpLink];
