import React from 'react'
import { Text, View } from 'react-native'

type DetailProps = {
    id: string | undefined
}

export const Detail: React.FC<DetailProps> = ({ id }) => {
    if (!id) return <Text>Id is required</Text>

    return (
        <View>
            <Text>Detail{id}</Text>
        </View>
    )
}
