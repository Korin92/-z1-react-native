export interface Item {
  id: string
  title: string
  content: string
  image: string
  __typename: string
  category: Category
  author: string
}

export interface Category {
  id: string
  title: string
}
