import { useGetCategories } from '../../use-cases/get-categories.ts'

export const categoryService = () => {
    const { loading, error, categories } = useGetCategories()

    return { loading, error, categories }
}
