將查詢片段製作成 `Custom Hook` 以便模組化

```
import { useMemo } from "react";
import { gql, useQuery } from "@apollo/client";
import { produce } from "immer";

import type { UseQueryFunction } from "../apollo/hook/type";

import dateFieldTransformer from "../apollo/hook/utils/dateFieldTransformer";
import { Product } from "../schema/orders";

const QUERY = gql`
  query Product($productId: ID!) {
    product(id: $productId) {
       ...
    }
  }
`;

interface Data {
  product: Product;
}

interface Variables {
  productId: string;
}

/** -    */
const useProduct: UseQueryFunction<Data, Variables> = (options) => {
  const { data, ...result } = useQuery<Data, Variables>(QUERY, options);

  const _data = useMemo(() => {
    if (data?.product) {
      return produce(data, (draft) => {
        dateFieldTransformer(draft.product);
      });
    }
    return data;
  }, [data]);

  return { data: _data, ...result };
};

export default useProduct;

```
