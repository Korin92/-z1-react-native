import React, { memo, useCallback, useState } from 'react'
import {
    AuthorText,
    CardContainer,
    StyledImage,
    StyledImageContainer,
    TextContainer,
    TitleText,
    TypeText,
} from './Card.style.ts'
import { ActivityIndicator } from 'react-native'

interface CardProps {
    title: string
    author: string
    image: string
    type: string
    layout: 'row' | 'column'
    onPress?: () => void
}

const fallbackImage = 'https://via.placeholder.com/640x360/808080/000000?text=No+Image+Available'

const CardComponent: React.FC<CardProps> = ({ title, author, image, type, layout, onPress }) => {
    const [imageUri, setImageUri] = useState(image)
    const [isLoading, setIsLoading] = useState(true)

    const handleLoad = useCallback(() => {
        setIsLoading(false)
    }, [])

    const handleError = useCallback(() => {
        setImageUri(fallbackImage)
        setIsLoading(false)
    }, [])

    return (
        <CardContainer onPress={onPress} layout={layout}>
            <StyledImageContainer layout={layout}>
                {isLoading && <ActivityIndicator />}
                <StyledImage
                    source={{ uri: imageUri }}
                    onLoad={handleLoad}
                    onError={handleError}
                    layout={layout}
                />
            </StyledImageContainer>
            <TextContainer>
                <TypeText>{type ?? 'no type'}</TypeText>
                <TitleText>{title ?? 'no title'}</TitleText>
                <AuthorText>{author ?? 'no author'}</AuthorText>
            </TextContainer>
        </CardContainer>
    )
}

const areEqual = (prevProps: CardProps, nextProps: CardProps) => {
    return (
        prevProps.title === nextProps.title &&
        prevProps.author === nextProps.author &&
        prevProps.image === nextProps.image &&
        prevProps.type === nextProps.type &&
        prevProps.layout === nextProps.layout
    )
}

export const Card = memo(CardComponent, areEqual)
