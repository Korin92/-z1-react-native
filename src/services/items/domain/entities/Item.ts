import { Category } from '../../../categories/domain/entities/Category.ts'

export interface Item {
    id: string
    title: string
    content: string
    image: string
    category: Category
    author: string
}
