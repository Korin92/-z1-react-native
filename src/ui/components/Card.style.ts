import { Pressable, Text, View } from 'react-native'
import styled from 'styled-components'

export const CardContainer = styled(Pressable)<{ layout: 'row' | 'column' }>`
    margin: 10px;
    background-color: #5f316f;
    padding: 16px;
    border-radius: 10px;
    flex: 1;
    flex-direction: ${props => (props.layout === 'row' ? 'row' : 'column')};
`

export const TextContainer = styled(View)`
    flex: 1;
`

export const TitleText = styled(Text)`
    font-size: 18px;
    font-family: 'RobotoSlab-SemiBold';
`

export const AuthorText = styled(Text)`
    font-size: 14px;
    color: gray;
    font-family: 'RobotoSlab-Regular';
`

export const TypeText = styled(Text)`
    font-size: 12px;
    color: black;
    font-family: 'RobotoSlab-Regular';
`
