import React, { useEffect, useRef, useState } from 'react'
import TrackPlayer, { useProgress, Event, State, PlaybackState } from 'react-native-track-player'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import { PlayerDetailContainer, PlayerDetailTitle } from './player-detail.style.ts'
import { Player } from '../../components/player/player.tsx'
import { CustomSlider } from '../../components/slider/slider.tsx'

export const PlayerDetail = () => {
    const isPlayerInitialized = useRef(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const progress = useProgress()
    const id = uuidv4()

    useEffect(() => {
        const setupPlayer = async () => {
            try {
                if (!isPlayerInitialized.current) {
                    isPlayerInitialized.current = true

                    await TrackPlayer.add({
                        id: id,
                        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
                        title: 'Sample Track',
                        artist: 'Sample Artist',
                    })
                }
            } catch (error) {
                console.error('Error setting up TrackPlayer:', error)
            }
        }

        setupPlayer()

        return () => {
            TrackPlayer.reset()
            isPlayerInitialized.current = false
        }
    }, [])

    useEffect(() => {
        const onPlaybackStateChange = (event: PlaybackState) => {
            if (event.state === State.Playing) {
                setIsPlaying(true)
            } else if (event.state === State.Paused || event.state === State.Stopped) {
                setIsPlaying(false)
            }
        }

        const subscription = TrackPlayer.addEventListener(
            Event.PlaybackState,
            onPlaybackStateChange,
        )

        return () => {
            subscription.remove()
        }
    }, [])

    const handleSeekForward = async () => {
        const { position } = await TrackPlayer.getProgress()
        await TrackPlayer.seekTo(position + 10)
    }

    const handleSeekBackward = async () => {
        const { position } = await TrackPlayer.getProgress()
        await TrackPlayer.seekTo(Math.max(position - 10, 0))
    }

    const handleSliderChange = async (value: number) => {
        await TrackPlayer.seekTo(value)
    }
    const handlePlayPause = async () => {
        if (isPlaying) {
            await TrackPlayer.pause()
        } else {
            await TrackPlayer.play()
        }
    }
    return (
        <PlayerDetailContainer>
            <PlayerDetailTitle>Sample Track</PlayerDetailTitle>
            <CustomSlider handleSliderChange={handleSliderChange} progress={progress} />
            <Player
                isPlaying={isPlaying}
                handleSeekBackward={handleSeekBackward}
                handleSeekForward={handleSeekForward}
                handlePlayPause={handlePlayPause}
            />
        </PlayerDetailContainer>
    )
}
