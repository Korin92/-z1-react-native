import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { categoryService } from '../modules/categories/domain/services/category-service.ts'
import { HomeScreen } from '../ui/pages/home/home.tsx'
import { Text } from 'react-native'
import { TabNavParamList } from './types.ts'
import { TabBar } from '../ui/components/tab-bar/tab-bar.tsx'
import { ROUTE_ALL } from './route-constants.ts'
import { SkeletonNavigator } from './SkeletonNavigator.tsx'

const Tab = createMaterialTopTabNavigator<TabNavParamList>()

export const TabNavigator = () => {
    const { loading, error, categories } = categoryService()

    if (loading) return <SkeletonNavigator />

    if (error) return <Text>Error: {error.message}</Text>

    return (
        <Tab.Navigator tabBar={props => <TabBar {...props} />}>
            <Tab.Screen
                name={ROUTE_ALL}
                component={HomeScreen}
                initialParams={{ categoryId: null }}
            />
            {categories.map(category => (
                <Tab.Screen
                    key={category.id}
                    name={category.title}
                    component={HomeScreen}
                    initialParams={{ categoryId: category.id }}
                />
            ))}
        </Tab.Navigator>
    )
}
