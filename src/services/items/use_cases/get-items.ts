import { useQuery } from '@apollo/client'
import { GetItems } from '../adapters/graphql/queries/get-items.ts'
import { Item } from '../domain/entities/Item.ts'

interface GetItemsData {
    items: Item[]
}

export const useGetItems = () => {
    const { loading, error, data } = useQuery<GetItemsData>(GetItems)

    const items: Item[] = data ? data.items : []

    return { loading, error, items }
}
