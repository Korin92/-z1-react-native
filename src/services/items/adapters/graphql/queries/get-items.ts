import { gql } from '@apollo/client'

export const GET_ITEMS = gql`
    query GetItems {
        items {
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
