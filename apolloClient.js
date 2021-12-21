import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api-eu-central-1.graphcms.com/v2/ckx0a5ow80od401xpen297noz/master",
    cache: new InMemoryCache(),
    defaultOptions: {
      query: {
          fetchPolicy: 'no-cache',
      },
  }
});

export default client;