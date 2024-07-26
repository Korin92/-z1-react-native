import { Skeleton } from '../ui/components/skeleton/skeleton.tsx'
import { TabNavigatorSkeletonContainer } from './tab-navigator.style.ts'
import React from 'react'

export const SkeletonNavigator = () => {
    return (
        <TabNavigatorSkeletonContainer>
            <Skeleton margin={10} width={'100px'} height={40} />
            <Skeleton margin={10} width={'100px'} height={40} />
            <Skeleton margin={10} width={'100px'} height={40} />
        </TabNavigatorSkeletonContainer>
    )
}
