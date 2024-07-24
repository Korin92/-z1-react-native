import React, { useCallback, useState } from 'react'
import { StyledImage, StyledImageContainer } from './custom-image.style.ts'
import { ActivityIndicator } from 'react-native'

type CustomImageProps = {
    layout?: 'row' | 'column'
    source: string
}
const fallbackImage = 'https://via.placeholder.com/640x360/808080/000000?text=No+Image+Available'

export const CustomImage: React.FC<CustomImageProps> = ({ layout, source }) => {
    const [imageUri, setImageUri] = useState(source)
    const [isLoading, setIsLoading] = useState(true)

    const handleLoad = useCallback(() => {
        setIsLoading(false)
    }, [])

    const handleError = useCallback(() => {
        setImageUri(fallbackImage)
        setIsLoading(false)
    }, [])

    return (
        <StyledImageContainer layout={layout}>
            {isLoading && <ActivityIndicator />}
            <StyledImage
                source={{ uri: imageUri }}
                onLoad={handleLoad}
                onError={handleError}
                layout={layout}
            />
        </StyledImageContainer>
    )
}
