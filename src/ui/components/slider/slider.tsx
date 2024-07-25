import Slider from '@react-native-community/slider'
import { PlayerDetailDuration } from '../../features/player-detail/player-detail.style.ts'
import { formatTime } from '../../../utils/format-time.ts'
import React from 'react'
import { SliderProps } from './types.ts'
import { SliderContainer } from './slider.style.ts'

export const CustomSlider: React.FC<SliderProps> = ({ handleSliderChange, progress }) => {
    return (
        <SliderContainer>
            <Slider
                minimumValue={0}
                maximumValue={progress.duration}
                value={progress.position}
                onValueChange={handleSliderChange}
                minimumTrackTintColor="#1EB1FC"
                maximumTrackTintColor="#CCC"
                thumbTintColor="#1EB1FC"
            />
            <PlayerDetailDuration>{formatTime(progress.position)}</PlayerDetailDuration>
        </SliderContainer>
    )
}
