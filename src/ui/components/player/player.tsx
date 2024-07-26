import React from 'react'
import {
    BackgroundButton,
    PlayerContainer,
    PLayerForwardIcon,
    PlayerPauseIcon,
    PlayerPlayIcon,
    PlayerReplayIcon,
} from './player.style.ts'
import { PlayerProps } from './types.ts'

export const Player: React.FC<PlayerProps> = ({
    handleForward,
    handleBackward,
    isPlaying,
    handlePlayPause,
}) => {
    return (
        <PlayerContainer>
            <BackgroundButton>
                <PlayerReplayIcon size={30} name="replay-10" onPress={handleBackward} />
            </BackgroundButton>
            <BackgroundButton>
                {isPlaying ? (
                    <PlayerPauseIcon onPress={handlePlayPause} name="pause" size={50} />
                ) : (
                    <PlayerPlayIcon onPress={handlePlayPause} name="play-arrow" size={50} />
                )}
            </BackgroundButton>
            <BackgroundButton>
                <PLayerForwardIcon name="forward-10" size={30} onPress={handleForward} />
            </BackgroundButton>
        </PlayerContainer>
    )
}
