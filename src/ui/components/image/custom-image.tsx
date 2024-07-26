import React, { useCallback, useState } from 'react'
import { StyledImage, StyledImageContainer } from './custom-image.style.ts'
import { CustomImageProps } from './types.ts'
import { Skeleton } from '../skeleton/skeleton.tsx'

const fallbackImage = 'https://via.placeholder.com/640x360/a9a9aae3/000000?text=No+Image+Available'

export const CustomImage: React.FC<CustomImageProps> = ({ layout, source, width, height }) => {
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
            {isLoading && <Skeleton width={width} height={height} />}
            <StyledImage
                source={{ uri: imageUri }}
                onLoad={handleLoad}
                resizeMode={'cover'}
                onError={handleError}
                layout={layout}
            />
        </StyledImageContainer>
    )
}
