import { useQuery } from '@apollo/client'
import { Category, GetCategoriesData } from '../domain/models/category.ts'
import { GET_CATEGORIES } from '../adapters/graphql/queries/get-categories.ts'

export const useGetCategories = () => {
    const { loading, error, data } = useQuery<GetCategoriesData>(GET_CATEGORIES)

    const categories: Category[] = data
        ? Array.from(new Set(data.items.map(item => item.category.id)))
              .map(id => data.items.find(item => item.category.id === id)?.category)
              .filter((category): category is Category => category !== undefined)
        : []

    return { loading, error, categories }
}
