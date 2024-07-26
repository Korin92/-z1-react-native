import { DetailContainer } from './detail.style.ts'
import { Skeleton } from '../../components/skeleton/skeleton.tsx'
import React from 'react'

export const SkeletonDetail = () => {
    return (
        <DetailContainer>
            <Skeleton margin={10} height={30} />
            <Skeleton margin={10} width={'100px'} height={20} />
            <Skeleton margin={10} height={300} />
            <Skeleton margin={10} height={80} />
            <Skeleton margin={10} height={80} />
            <Skeleton margin={10} height={50} />
        </DetailContainer>
    )
}
