import React, { useCallback } from 'react'
import { Card } from '../../components/card/card.tsx'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { DetailScreenNavigationProp, TabNavParamList } from '../../../navigation/types.ts'
import { lessonService } from '../../../modules/lesson/domain/services/lesson-service.ts'
import { Lesson } from '../../../modules/lesson/domain/models/lesson.ts'
import { FlashList } from '@shopify/flash-list'
import { lessonByCategoryService } from '../../../modules/lesson/domain/services/lesson-by-category-service.ts'
import { HomeContainer } from './home.style.ts'
import { Skeleton } from '../../components/skeleton/skeleton.tsx'
import { ErrorComponent } from '../../components/error/error.tsx'
import { ROUTE_ALL, ROUTE_DETAIL } from '../../../navigation/route-constants.ts'

type HomeProps = {
    route: RouteProp<TabNavParamList, keyof TabNavParamList>
}

export const Home: React.FC<HomeProps> = ({ route }) => {
    const navigation = useNavigation<DetailScreenNavigationProp>()
    const { categoryId } = route?.params || { categoryId: null }
    const { loading, error, lessons } = categoryId
        ? lessonByCategoryService(categoryId)
        : lessonService()
    const isColumnLayout = route.name === ROUTE_ALL
    const numColumns = isColumnLayout ? 2 : 1

    const handlePress = useCallback(
        (id: string) => {
            navigation.navigate(ROUTE_DETAIL, { id })
        },
        [navigation],
    )

    const renderItem = useCallback(
        ({ item }: { item: Lesson }) => (
            <Card
                title={item.title}
                author={item.author}
                image={item.image}
                type={item.category.title}
                layout={isColumnLayout ? 'column' : 'row'}
                onPress={() => handlePress(item.id)}
            />
        ),
        [handlePress, isColumnLayout],
    )

    const renderSkeleton = useCallback(
        () => <Skeleton margin={10} width={'95%'} height={isColumnLayout ? 300 : 150} />,
        [isColumnLayout],
    )
    if (error) return <ErrorComponent />

    return (
        <HomeContainer>
            {loading ? (
                <FlashList
                    data={Array(numColumns * 6).fill({})}
                    keyExtractor={(_, index) => `sk-${index}`}
                    numColumns={numColumns}
                    renderItem={renderSkeleton}
                    estimatedItemSize={200}
                />
            ) : (
                <FlashList
                    data={lessons}
                    keyExtractor={item => item.id}
                    numColumns={numColumns}
                    renderItem={renderItem}
                    estimatedItemSize={200}
                />
            )}
        </HomeContainer>
    )
}
