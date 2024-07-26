import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { BackButtonIcon, PressableStyled } from './back-button-navigation.style.ts'

export const BackButtonNavigation = () => {
    const navigation = useNavigation()

    return (
        <PressableStyled onPress={() => navigation.goBack()}>
            <BackButtonIcon name="close" />
        </PressableStyled>
    )
}
