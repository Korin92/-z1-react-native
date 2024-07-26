import { useQuery } from '@apollo/client'
import { GET_LESSONS } from '../adapters/graphql/queries/get-lessons.ts'
import { GetLessonsData, Lesson } from '../domain/models/lesson.ts'

export const useGetLessons = () => {
    const { loading, error, data } = useQuery<GetLessonsData>(GET_LESSONS)

    if (!data) return { loading, error, items: [] }

    const lessons: Lesson[] = data ? data.items : []

    return { loading, error, lessons }
}
