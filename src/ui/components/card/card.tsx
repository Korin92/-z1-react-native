import React, { memo } from 'react'
import { AuthorText, CardContainer, TextContainer, TitleText, TypeText } from './card.style.ts'

import { CustomImage } from '../image/custom-image.tsx'
import { View } from 'react-native'
import { CardProps } from './type.ts'

const CardComponent: React.FC<CardProps> = ({ title, author, image, type, layout, onPress }) => {
    const isRow = layout === 'row'

    return (
        <CardContainer onPress={onPress} layout={layout}>
            <CustomImage
                width={isRow ? '140px' : '100%'}
                height={isRow ? 120 : 110}
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

const areEqual = (prev: CardProps, next: CardProps) => {
    return (
        prev.title === next.title &&
        prev.author === next.author &&
        prev.image === next.image &&
        prev.type === next.type &&
        prev.layout === next.layout
    )
}

export const Card = memo(CardComponent, areEqual)
