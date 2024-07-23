import { useQuery } from '@apollo/client'
import { Item } from '../domain/entities/Item.ts'
import { GET_ITEMS_BY_CATEGORY } from '../adapters/graphql/queries/get-items-by-category.ts'

interface GetItemsData {
    items: Item[]
}

export const useGetItemsByCategory = (category?: string) => {
    const { loading, error, data } = useQuery<GetItemsData>(GET_ITEMS_BY_CATEGORY, {
        variables: { category },
    })

    const items: Item[] = data ? data.items : []

    return { loading, error, items }
}
