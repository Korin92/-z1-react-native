import React from 'react'
import { Home } from '../../features/home/Home'
import { HomeScreenProps } from '../../../navigation/types.ts'

export const HomeScreen = ({ route }: HomeScreenProps) => {
    return <Home route={route} />
}
