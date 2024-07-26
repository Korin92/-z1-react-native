import React, { useRef } from 'react'
import { Animated } from 'react-native'
import { SkeletonProps } from './types.ts'
import { SkeletonStyled } from './skeleton.style.ts'

const CustomSkeletonAnimated = Animated.createAnimatedComponent(SkeletonStyled)

export const Skeleton: React.FC<SkeletonProps> = ({ width, height, margin }) => {
    const opacityAnimation = useRef(new Animated.Value(0.5))

    React.useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(opacityAnimation.current, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(opacityAnimation.current, {
                    toValue: 0.5,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ]),
        ).start()
    }, [])

    return (
        <CustomSkeletonAnimated
            opacity={opacityAnimation.current}
            width={width}
            height={height}
            margin={margin}
        />
    )
}
