import React, { useState } from 'react'
import {
    AuthorText,
    CardContainer,
    StyledImage,
    TextContainer,
    TitleText,
    TypeText,
} from './Card.style.ts'

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

    return (
        <CardContainer onPress={onPress} layout={layout}>
            <StyledImage
                source={{ uri: imageUri }}
                layout={layout}
                onError={() => setImageUri(fallbackImage)}
            />
            <TextContainer>
                <TypeText>{type}</TypeText>
                <TitleText>{title}</TitleText>
                <AuthorText>{author}</AuthorText>
            </TextContainer>
        </CardContainer>
    )
}
