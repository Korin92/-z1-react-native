import { Item } from '../services/items/domain/entities/Item.ts'

export const filterItemsByCategory = (items: Item[], categoryId: string | null) => {
    if (!categoryId) return items
    return items.filter(item => item.category.id === categoryId)
}
