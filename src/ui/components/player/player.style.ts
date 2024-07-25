import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export const PlayerContainer = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const BackgroundButton = styled.TouchableOpacity`
    background-color: #43224e;
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin: 4px;
`

export const PlayerPlayIcon = styled(Icon)`
    color: #f9f9f9;
`

export const PlayerPauseIcon = styled(Icon)`
    color: #f9f9f9;
`
export const PLayerForwardIcon = styled(Icon)`
    color: #f9f9f9;
`

export const PlayerReplayIcon = styled(Icon)`
    color: #f9f9f9;
`
