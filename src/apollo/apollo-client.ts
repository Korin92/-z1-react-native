import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { REACT_APP_GRAPHQL_ENDPOINT } from '@env'

const client = new ApolloClient({
    link: new HttpLink({
        uri: REACT_APP_GRAPHQL_ENDPOINT,
    }),
    cache: new InMemoryCache(),
})

export default client
