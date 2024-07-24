import styled from 'styled-components'
import { ScrollView, TouchableOpacity, Text, View } from 'react-native'
import { background } from '../../../styles/colors.ts'

export const TabBarContainer = styled(ScrollView)`
    background-color: ${background};
    max-height: 80px;
    overflow: hidden;
`

export const TabBarContent = styled(View)`
    flex-direction: row;
    align-items: center;
`

export const TabItem = styled(TouchableOpacity)`
    padding: 16px;
`

export const TabLabel = styled(Text)<{ isFocused: boolean }>`
    color: white;
    font-family: RobotoSlab-Medium;
    background-color: ${({ isFocused }) => (isFocused ? '#b779c3' : '#593c70')};
    border-radius: 10px;
    padding: 8px;
`
