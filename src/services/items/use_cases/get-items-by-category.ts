import { useQuery } from '@apollo/client'
import { Item } from '../domain/entities/Item.ts'
import { GET_ITEMS } from '../adapters/graphql/queries/get-items.ts'
import { filterItemsByCategory } from '../../../utils/filters-item-by-category.ts'

interface GetItemsData {
    items: Item[]
}

export const useGetItemsByCategory = (categoryId: string) => {
    const { loading, error, data } = useQuery<GetItemsData>(GET_ITEMS)

    if (!data) return { loading, error, items: [] }

    const items = filterItemsByCategory(data?.items, categoryId)

    return { loading, error, items }
}
