import { Category } from '../../../categories/domain/models/category.ts'

export interface Lesson {
    id: string
    title: string
    content: string
    image: string
    category: Category
    author: string
}

export interface GetLessonsData {
    items: Lesson[]
}
