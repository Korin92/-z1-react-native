import { Image, View } from 'react-native'
import styled from 'styled-components'

export const StyledImageContainer = styled(View)<{ layout?: 'row' | 'column' }>`
    width: ${props => (props.layout === 'row' ? '100px' : '100%')};
    height: ${props => (props.layout === 'row' ? '100px' : '150px')};
    margin-right: ${props => (props.layout === 'row' ? '10px' : '0')};
    margin-bottom: ${props => (props.layout === 'row' ? '0' : '10px')};
`
export const StyledImage = styled(Image)<{ layout?: 'row' | 'column' }>`
    width: 100%;
    height: ${props => (props.layout === 'row' ? '100%' : '60%')};
    border-radius: 10px;
`
