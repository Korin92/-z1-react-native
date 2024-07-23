import React from 'react'
import { Home } from '../../features/home/Home'
import { HomeScreenRouteProp } from '../../../navigation/types.ts'

interface HomeScreenProps {
    route: HomeScreenRouteProp
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ route }) => {
    return <Home route={route} />
}
