import { useGetItemsByCategory } from '../../use_cases/get-items-by-category.ts'

export const ItemByCategoryService = (category?: string) => {
    const { loading, error, items } = useGetItemsByCategory(category)
    return { loading, error, items }
}
