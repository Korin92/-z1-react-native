import styled from 'styled-components/native'

export const CardContainer = styled.Pressable<{ layout: 'row' | 'column' }>`
    margin: 0 10px 10px 10px;
    padding: ${props => (props.layout === 'row' ? '10px' : '0')};
    background-color: #5f316f;
    border-radius: 10px;
    height: ${props => (props.layout === 'row' ? '150px' : '300px')};
    flex: 1;
    flex-direction: ${props => (props.layout === 'row' ? 'row' : 'column')};
    align-content: center;
    align-items: ${props => (props.layout === 'row' ? 'center' : 'flex-start')};
`

export const TextContainer = styled.View`
    padding: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

export const TitleText = styled.Text`
    font-size: 18px;
    color: #f9f9f9;
    font-family: Poppins-SeimBold;
`

export const AuthorText = styled.Text`
    font-size: 10px;
    color: gray;
    margin-top: 5px;
    font-family: Poppins-Regular;
`

export const TypeText = styled.Text`
    font-size: 12px;
    color: #c1a851;
    font-family: Poppins-SemiBold;
    text-transform: uppercase;
`
