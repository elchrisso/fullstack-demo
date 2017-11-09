import { ApolloClient } from 'apollo-client'
import { HttpLink, InMemoryCache } from 'apollo-client-preset'

const httpLink = new HttpLink(({ uri: 'http://localhost:60000/simple/v1/cj9hebdp900040108xhbg6cn5' }))

//deprecated apollo 1 networkInterface
//const networkInterface = createNetworkInterface({
//  uri: 'http://localhost:60000/simple/v1/cj9hebdp900040108xhbg6cn5'
//})

//apollo 2 client
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache
})

//apollo 1 client
// const client = new ApolloClient({
//   networkInterface
// })

export default client