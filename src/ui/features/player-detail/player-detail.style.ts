import styled from 'styled-components/native'

export const PlayerDetailContainer = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
}))`
    padding: 16px;
`

export const PlayerDetailTitle = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #f9f9f9;
    font-family: Poppins-Bold;
    text-align: center;
`

export const PlayerDetailDuration = styled.Text`
    font-size: 16px;
    color: #f9f9f9;
`
