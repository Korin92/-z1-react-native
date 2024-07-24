import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { PressableStyled } from './back-button-navigation.style.ts'

export const BackButtonNavigation = () => {
    const navigation = useNavigation()

    return (
        <PressableStyled onPress={() => navigation.goBack()}>
            <Icon name="close" size={24} color="#fff" />
        </PressableStyled>
    )
}
