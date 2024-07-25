import styled from 'styled-components/native'

export const DetailContainer = styled.ScrollView`
    flex: 1;
    padding: 16px;
`

export const CategoryText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #ffdd66;
    text-transform: uppercase;
`

export const TitleText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    font-family: RobotoSlab-SemiBold;
`

export const AuthorText = styled.Text`
    font-size: 16px;
    color: #ffffff;
`

export const ContentText = styled.Text`
    font-size: 16px;
    color: #ffffff;
    margin-top: 16px;
`

export const ImageContainer = styled.View`
    position: relative;
    height: 300px;
    width: 100%;
`

export const PlayButton = styled.TouchableOpacity`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-25px, -25px);
`
