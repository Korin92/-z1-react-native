import { gql } from '@apollo/client'

export const GET_ITEMS_BY_CATEGORY = gql`
    query GetItemsByCategory($category: String!) {
        items(category: $category) {
            id
            title
            content
            image
            author
            category {
                id
                title
            }
        }
    }
`
