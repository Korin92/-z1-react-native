import { useGetLessonById } from '../../use-cases/get-lesson-by-id.ts'

export const lessonByIdService = (id: string) => {
    const { loading, error, lesson } = useGetLessonById(id)

    return { loading, error, lesson }
}
