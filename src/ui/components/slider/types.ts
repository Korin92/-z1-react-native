import { Progress } from 'react-native-track-player'

export interface SliderProps {
    progress: Progress
    handleSliderChange: (value: number) => void
}
