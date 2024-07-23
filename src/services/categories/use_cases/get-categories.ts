import { useQuery } from '@apollo/client'
import { Category } from '../domain/entities/Category.ts'
import { GetCategories } from '../adapters/graphql/queries/get-categories.ts'

interface GetCategoriesData {
    items: { category: Category }[]
}

export const useGetCategories = () => {
    const { loading, error, data } = useQuery<GetCategoriesData>(GetCategories)

    const categories: Category[] = data
        ? Array.from(new Set(data.items.map(item => item.category.id)))
              .map(id => data.items.find(item => item.category.id === id)?.category)
              .filter((category): category is Category => category !== undefined)
        : []

    return { loading, error, categories }
}
