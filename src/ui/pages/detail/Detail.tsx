import React from 'react'
import {Detail} from '../../features/detail/Detail.tsx'
import {useRoute} from '@react-navigation/native'
import {DetailScreenRouteProp} from '../../../navigation/types.ts'

export default function DetailScreen(): React.JSX.Element {
  const route = useRoute<DetailScreenRouteProp>()
  const {id} = route.params

  return <Detail id={id} />
}
