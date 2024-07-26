import { Lesson } from '../modules/lesson/domain/models/lesson.ts'

export const filterItemsByCategory = (items: Lesson[], categoryId: string | null) => {
    if (!categoryId) return items
    return items.filter(item => item.category.id === categoryId)
}
