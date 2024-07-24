import styled from 'styled-components'
import { Image, ScrollView, Text } from 'react-native'

export const DetailContainer = styled(ScrollView)`
    flex: 1;
    padding: 16px;
`

export const CategoryText = styled(Text)`
    font-size: 14px;
    font-weight: bold;
    color: #ffdd66;
    text-transform: uppercase;
`

export const TitleText = styled(Text)`
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    font-family: RobotoSlab-SemiBold;
`

export const AuthorText = styled(Text)`
    font-size: 16px;
    color: #ffffff;
`

export const ImageStyled = styled(Image)`
    width: 100%;
    height: 200px;
`

export const ContentText = styled(Text)`
    font-size: 16px;
    color: #ffffff;
    margin-top: 16px;
`
