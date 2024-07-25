import React from 'react'
import { Pressable, Text } from 'react-native'
import { useGetItemById } from '../../../services/items/use_cases/get-item-by-id.ts'
import {
    AuthorText,
    CategoryText,
    ContentText,
    DetailContainer,
    TitleText,
} from './Detail.style.ts'
import { CustomImage } from '../../components/image/custom-image.tsx'
import { useNavigation } from '@react-navigation/native'
import { DetailScreenNavigationProp } from '../../../navigation/types.ts'

type DetailProps = {
    id: string | undefined
}

export const Detail: React.FC<DetailProps> = ({ id }) => {
    const navigation = useNavigation<DetailScreenNavigationProp>()
    if (!id) return <Text>Id is required</Text>

    const { loading, error, item } = useGetItemById(id)

    if (loading) return <Text>Loading...</Text>

    if (error) return <Text>Error</Text>

    return (
        <DetailContainer>
            <CategoryText>{item?.category.title}</CategoryText>
            <TitleText>{item?.title}</TitleText>
            <AuthorText>{item?.author}</AuthorText>
            <Pressable onPress={() => navigation.navigate('PlayerDetail')}>
                <Text>Go to player</Text>
            </Pressable>
            <CustomImage height={'300px'} width={'100%'} source={item?.image || ''} />
            <ContentText>{item?.content}</ContentText>
        </DetailContainer>
    )
}
