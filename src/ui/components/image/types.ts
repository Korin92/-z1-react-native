export interface CustomImageStyleProps {
    layout?: 'row' | 'column'
    width?: string
    height?: string | number
    isLoading?: boolean
}

export interface CustomImageProps {
    layout?: 'row' | 'column'
    source: string
    width?: string
    height?: string | number
    margin?: number
}
