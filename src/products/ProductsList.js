import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { List, ListItem } from 'material-ui'

import productsService from './service'

class ProductsList extends Component {
  render() {
    let products = null

    if (this.props.data.loading) {
      return <h1>Loading products</h1>
    }

    if (this.props.data.allProducts) {
      products = this.props.data.allProducts
    }

    return (
      <div>
        <List>
          {products.map((product) => {
            return <ListItem>{product.name}</ListItem>
          })}
        </List>
      </div>
    )
  }
}

const withProductsQuery = graphql(productsService.allProducts, {options: { fetchPolicy: 'network-only'}})(ProductsList)

export default withProductsQuery