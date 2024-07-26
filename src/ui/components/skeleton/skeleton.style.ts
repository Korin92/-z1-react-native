import styled from 'styled-components/native'
import { SkeletonProps } from './types.ts'

export const SkeletonStyled = styled.View<SkeletonProps>`
    opacity: ${({ opacity }) => opacity ?? 1};
    width: ${({ width }) => width};
    height: ${({ height }) => height}px;
    background-color: #f9f9f9;
    border-radius: 10px;
    margin: ${({ margin }) => (margin ? `${margin}px` : '0')};
`
