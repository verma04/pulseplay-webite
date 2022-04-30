import { ApolloClient, InMemoryCache } from "@apollo/client";
const prod = process.env.NODE_ENV === 'production'
const endpoint = prod ? 'http://43.204.5.144/graphql' : 'http://43.204.5.144/graphql'
const client = new ApolloClient({
    uri:    endpoint  ,
    cache: new InMemoryCache()
  });


export default client;

