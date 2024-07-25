export interface PlayerProps {
    isPlaying: boolean
    handleSeekBackward: () => void
    handleSeekForward: () => void
    handlePlayPause: () => void
}
