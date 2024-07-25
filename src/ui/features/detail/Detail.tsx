import React from 'react'
import { Text } from 'react-native'
import { useGetItemById } from '../../../services/items/use_cases/get-item-by-id.ts'
import {
    AuthorText,
    CategoryText,
    ContentText,
    DetailContainer,
    ImageContainer,
    PlayButton,
    TitleText,
} from './Detail.style.ts'
import { CustomImage } from '../../components/image/custom-image.tsx'
import { useNavigation } from '@react-navigation/native'
import { DetailScreenNavigationProp } from '../../../navigation/types.ts'
import Icon from 'react-native-vector-icons/AntDesign'

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
            <ImageContainer>
                <CustomImage height={'300px'} width={'100%'} source={item?.image || ''} />
                <PlayButton onPress={() => navigation.navigate('PlayerDetail')}>
                    <Icon name={'play'} size={50} color={'#f9f9f9'} />
                </PlayButton>
            </ImageContainer>
            <ContentText>{item?.content}</ContentText>
        </DetailContainer>
    )
}
