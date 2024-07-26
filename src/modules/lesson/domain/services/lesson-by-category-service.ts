import { useGetLessonsByCategory } from '../../use-cases/get-lessons-by-category.ts'

export const lessonByCategoryService = (category?: string) => {
    const { loading, error, lessons } = useGetLessonsByCategory(category || '')
    return { loading, error, lessons }
}
