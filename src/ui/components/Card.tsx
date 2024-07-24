import React, { useState } from 'react'
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

const fallbackImage = 'https://via.placeholder.com/180/808080/000000?text=No+Image+Available'

export const Card: React.FC<CardProps> = ({ title, author, image, type, layout, onPress }) => {
    const [imageUri, setImageUri] = useState(image)
    const [isLoading, setIsLoading] = useState(true)

    return (
        <CardContainer onPress={onPress} layout={layout}>
            <StyledImageContainer layout={layout}>
                {isLoading && <ActivityIndicator />}
                <StyledImage
                    source={{ uri: imageUri }}
                    onLoad={() => setIsLoading(false)}
                    onError={() => {
                        setImageUri(fallbackImage)
                        setIsLoading(false)
                    }}
                />
            </StyledImageContainer>
            <TextContainer>
                <TypeText>{type}</TypeText>
                <TitleText>{title}</TitleText>
                <AuthorText>{author}</AuthorText>
            </TextContainer>
        </CardContainer>
    )
}
