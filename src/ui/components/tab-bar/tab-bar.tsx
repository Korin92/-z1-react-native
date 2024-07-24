import { TabBarContainer, TabBarContent, TabItem, TabLabel } from './tab-bar.style.ts'
import { NavigationHelpers, ParamListBase, TabNavigationState } from '@react-navigation/native'
import React from 'react'
import { MaterialTopTabDescriptorMap } from '@react-navigation/material-top-tabs/lib/typescript/src/types'

interface TabBarProps {
    state: TabNavigationState<ParamListBase>
    descriptors: MaterialTopTabDescriptorMap
    navigation: NavigationHelpers<ParamListBase>
}

export const TabBar: React.FC<TabBarProps> = ({ state, descriptors, navigation }) => {
    const { routes } = state

    return (
        <TabBarContainer horizontal showsHorizontalScrollIndicator={false}>
            <TabBarContent>
                {routes.map((route, index) => {
                    const { options } = descriptors[route.key]
                    const label =
                        typeof options.tabBarLabel === 'string'
                            ? options.tabBarLabel
                            : options.title || route.name

                    const isFocused = state.index === index

                    return (
                        <TabItem key={route.key} onPress={() => navigation.navigate(route.name)}>
                            <TabLabel isFocused={isFocused}>{label}</TabLabel>
                        </TabItem>
                    )
                })}
            </TabBarContent>
        </TabBarContainer>
    )
}
