import { useGetItems } from '../../use_cases/get-items.ts'

export const ItemService = () => {
    const { loading, error, items } = useGetItems()

    return { loading, error, items }
}
