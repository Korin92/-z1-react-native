import React, { memo } from 'react'
import { AuthorText, CardContainer, TextContainer, TitleText, TypeText } from './Card.style.ts'

import { CustomImage } from './image/custom-image.tsx'
import { View } from 'react-native'

interface CardProps {
    title: string
    author: string
    image: string
    type: string
    layout: 'row' | 'column'
    onPress?: () => void
}

const CardComponent: React.FC<CardProps> = ({ title, author, image, type, layout, onPress }) => {
    const isRow = layout === 'row'

    return (
        <CardContainer onPress={onPress} layout={layout}>
            <CustomImage
                borderRadius={isRow ? '10px' : '10px 10px 0 0'}
                width={isRow ? '120px' : '100%'}
                height={isRow ? '120px' : '40%'}
                source={image}
                layout={layout}
            />
            <TextContainer>
                <View>
                    <TypeText>{type}</TypeText>
                    <TitleText>{title}</TitleText>
                </View>
                <AuthorText>{author}</AuthorText>
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
