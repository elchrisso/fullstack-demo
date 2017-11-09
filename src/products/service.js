import gql from 'graphql-tag'

class productsService {
  allProducts = gql`
    query {
      allProducts{
        name
        id
        description
      }
    }
  `
}

export default new productsService()