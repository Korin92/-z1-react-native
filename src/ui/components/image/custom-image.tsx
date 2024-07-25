import React, { useCallback, useState } from 'react'
import { StyledImage, StyledImageContainer } from './custom-image.style.ts'
import { ActivityIndicator } from 'react-native'
import { CustomImageProps } from './types.ts'

const fallbackImage = 'https://via.placeholder.com/640x360/808080/000000?text=No+Image+Available'

export const CustomImage: React.FC<CustomImageProps> = ({
    layout,
    source,
    width,
    height,
    borderRadius,
}) => {
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
        <StyledImageContainer width={width} height={height} layout={layout}>
            {isLoading && <ActivityIndicator />}
            <StyledImage
                borderRadius={borderRadius}
                source={{ uri: imageUri }}
                onLoad={handleLoad}
                onError={handleError}
                layout={layout}
            />
        </StyledImageContainer>
    )
}
