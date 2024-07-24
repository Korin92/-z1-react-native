import { Image, Pressable, Text, View } from 'react-native'
import styled from 'styled-components'

export const CardContainer = styled(Pressable)<{ layout: 'row' | 'column' }>`
    margin: 10px;
    background-color: white;
    padding: 16px;
    border-radius: 10px;
    flex: 1;
    flex-direction: ${props => (props.layout === 'row' ? 'row' : 'column')};
`

export const StyledImageContainer = styled(View)<{ layout: 'row' | 'column' }>`
    justify-content: center;
    align-items: center;
    width: ${props => (props.layout === 'row' ? '100px' : '100%')};
    height: ${props => (props.layout === 'row' ? '100px' : '150px')};
    margin-right: ${props => (props.layout === 'row' ? '10px' : '0')};
    margin-bottom: ${props => (props.layout === 'row' ? '0' : '10px')};
`

export const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
    border-radius: 10px;
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
