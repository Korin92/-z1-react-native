export interface CardProps {
    title: string
    author: string
    image: string
    type: string
    layout: 'row' | 'column'
    onPress?: () => void
}
