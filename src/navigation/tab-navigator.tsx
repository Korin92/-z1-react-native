import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { CategoryService } from '../services/categories/domain/services/category-service.ts'
import { HomeScreen } from '../ui/pages/home/Home.tsx'
import { ActivityIndicator, Text } from 'react-native'

const Tab = createMaterialTopTabNavigator()

export const TabNavigator = () => {
    const { loading, error, categories } = CategoryService()

    if (loading) return <ActivityIndicator />

    if (error) return <Text>Error: {error.message}</Text>

    return (
        <Tab.Navigator>
            <Tab.Screen name="All" component={HomeScreen} initialParams={{ categoryId: null }} />
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
