import React from 'react'
import { ErrorContainer, ErrorContent, ErrorTitle, ErrorTitleContainer } from './error.style.ts'

export const ErrorComponent = () => {
    return (
        <ErrorContainer>
            <ErrorTitleContainer>
                <ErrorTitle>Ooops!</ErrorTitle>
                <ErrorContent>An error has occurred, please try again later</ErrorContent>
            </ErrorTitleContainer>
        </ErrorContainer>
    )
}
