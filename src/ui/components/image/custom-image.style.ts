import { Image, View } from 'react-native'
import styled from 'styled-components'
import { CustomImageStyleProps } from './types.ts'

export const StyledImageContainer = styled(View)<CustomImageStyleProps>`
    width: ${props => props.width};
    height: ${props => (props.height ? `${props.height}px` : '100%')};
    margin-right: ${props => (props.layout === 'row' ? '10px' : '0')};
`
export const StyledImage = styled(Image)<CustomImageStyleProps>`
    width: 100%;
    height: 100%;
    border-radius: ${props => (props.layout === 'column' ? '10px 10px 0 0' : '10px')};
`
