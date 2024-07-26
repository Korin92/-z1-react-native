import { background } from './colors.ts'
import { DefaultTheme } from '@react-navigation/native'

export const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: background,
    },
}
