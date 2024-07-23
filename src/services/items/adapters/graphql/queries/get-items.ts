import { gql } from '@apollo/client'

export const GetItems = gql`
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
