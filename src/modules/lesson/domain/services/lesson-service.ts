import { useGetLessons } from '../../use-cases/get-lessons.ts'

export const lessonService = () => {
    const { loading, error, lessons } = useGetLessons()

    return { loading, error, lessons }
}
