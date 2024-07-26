import { useQuery } from '@apollo/client'
import { GET_LESSONS } from '../adapters/graphql/queries/get-lessons.ts'
import { GetLessonsData } from '../domain/models/lesson.ts'

export const useGetLessonById = (id: string) => {
    const { loading, error, data } = useQuery<GetLessonsData>(GET_LESSONS)

    if (!data) return { loading, error, items: [] }

    const lesson = data.items.find(item => item.id === id)

    return { loading, error, lesson }
}
