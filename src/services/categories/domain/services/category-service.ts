import { useGetCategories } from '../../use_cases/get-categories.ts'

export const CategoryService = () => {
    const { loading, error, categories } = useGetCategories()

    return { loading, error, categories }
}
