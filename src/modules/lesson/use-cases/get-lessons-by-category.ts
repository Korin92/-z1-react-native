import { useQuery } from '@apollo/client'
import { GetLessonsData } from '../domain/models/lesson.ts'
import { filterItemsByCategory } from '../../../utils/filters-item-by-category.ts'
import { GET_LESSONS } from '../adapters/graphql/queries/get-lessons.ts'

export const useGetLessonsByCategory = (categoryId: string) => {
    const { loading, error, data } = useQuery<GetLessonsData>(GET_LESSONS)

    if (!data) return { loading, error, lessons: [] }

    if (!categoryId) return { loading, error, lessons: data.items }

    const lessons = filterItemsByCategory(data?.items, categoryId)

    return { loading, error, lessons }
}
