import { useQuery } from '@apollo/client'
import { GET_ITEMS } from '../adapters/graphql/queries/get-items.ts'
import { Item } from '../domain/entities/Item.ts'

interface GetItemsData {
    items: Item[]
}

export const useGetItems = () => {
    const { loading, error, data } = useQuery<GetItemsData>(GET_ITEMS)

    const items: Item[] = data ? data.items : []

    return { loading, error, items }
}
