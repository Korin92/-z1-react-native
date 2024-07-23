import {useQuery} from '@apollo/client'
import {GET_ITEMS} from '../adapters/graphql/queries/GET_ITEMS.ts'
import {Item} from '../domain/entities/Item.ts'

interface GetItemsData {
  items: Item[]
}

export const useGetItems = () => {
  const {loading, error, data} = useQuery<GetItemsData>(GET_ITEMS)
  return {loading, error, data}
}
