import React, { memo } from 'react'
import { AuthorText, CardContainer, TextContainer, TitleText, TypeText } from './Card.style.ts'

import { CustomImage } from './image/custom-image.tsx'

interface CardProps {
    title: string
    author: string
    image: string
    type: string
    layout: 'row' | 'column'
    onPress?: () => void
}

const CardComponent: React.FC<CardProps> = ({ title, author, image, type, layout, onPress }) => {
    return (
        <CardContainer onPress={onPress} layout={layout}>
            <CustomImage source={image} layout={layout} />
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
