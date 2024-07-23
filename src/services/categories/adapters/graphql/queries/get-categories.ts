import { gql } from '@apollo/client'

export const GetCategories = gql`
    query GetCategories {
        items {
            category {
                id
                title
            }
        }
    }
`
