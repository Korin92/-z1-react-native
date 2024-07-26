import { gql } from '@apollo/client'

export const GET_LESSONS = gql`
    query GetLessons {
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
