import {useGetItems} from '../../use_cases/GetItems.ts'
import {Item} from '../entities/Item.ts'

export const ItemService = () => {
  const {loading, error, data} = useGetItems()
  const items: Item[] = data ? data.items : []
  return {loading, error, items}
}
