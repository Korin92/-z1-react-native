import { useGetItemById } from '../../use_cases/get-item-by-id.ts'

export const ItemByIdService = (id: string) => {
    const { loading, error, item } = useGetItemById(id)

    return { loading, error, item }
}
