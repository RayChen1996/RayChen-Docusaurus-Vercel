

```tsx

import { Toaster } from "react-hot-toast";


<body>
  <ApolloProvider>
    <AOSProvider>{children}</AOSProvider>
    <Toaster />
  </ApolloProvider>
</body>
```


```tsx

    toast.promise(
      mutaion({
        variables: {
          body: params,
        },
      }),
      {
        loading: "提交中",
        success: (params) => {
          return parseApiResponse(params.data?.createContactMessage, {
            successLabel: "提交成功",
            unsuccessLabel: "提交失敗",
            failLabel: "提交錯誤",
          });
        },
        error: "提交錯誤",
      },
    );

```