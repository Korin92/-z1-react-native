import React from 'react'
import {
    AuthorText,
    CategoryText,
    ContentText,
    DetailContainer,
    ImageContainer,
    PlayButton,
    TitleText,
} from './detail.style.ts'
import { CustomImage } from '../../components/image/custom-image.tsx'
import { useNavigation } from '@react-navigation/native'
import { DetailScreenNavigationProp } from '../../../navigation/types.ts'
import Icon from 'react-native-vector-icons/AntDesign'
import { SkeletonDetail } from './skeleton-detail.tsx'
import { DetailProps } from './types.ts'
import { ErrorComponent } from '../../components/error/error.tsx'
import { lessonByIdService } from '../../../modules/lesson/domain/services/lesson-by-id-service.ts'
import { ROUTE_PLAYER_DETAIL } from '../../../navigation/route-constants.ts'

export const Detail: React.FC<DetailProps> = ({ id }) => {
    const navigation = useNavigation<DetailScreenNavigationProp>()
    const { loading, error, lesson } = lessonByIdService(id)

    if (loading) return <SkeletonDetail />

    if (error) return <ErrorComponent />

    return (
        <DetailContainer>
            <CategoryText>{lesson?.category.title}</CategoryText>
            <TitleText>{lesson?.title}</TitleText>
            <AuthorText>{lesson?.author}</AuthorText>
            <ImageContainer>
                <CustomImage height={300} width={'100%'} source={lesson?.image || ''} />
                <PlayButton onPress={() => navigation.navigate(ROUTE_PLAYER_DETAIL)}>
                    <Icon name={'play'} size={50} color={'#f9f9f9'} />
                </PlayButton>
            </ImageContainer>
            <ContentText>{lesson?.content}</ContentText>
        </DetailContainer>
    )
}
