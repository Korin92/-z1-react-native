import { useQuery } from '@apollo/client'
import { GET_ITEMS } from '../adapters/graphql/queries/get-items.ts'
import { Item } from '../domain/entities/Item.ts'

interface GetItemsData {
    items: Item[]
}

export const useGetItemById = (id: string) => {
    const { loading, error, data } = useQuery<GetItemsData>(GET_ITEMS)

    if (!data) return { loading, error, items: [] }

    const item = data.items.find(item => item.id === id)

    return { loading, error, item }
}
