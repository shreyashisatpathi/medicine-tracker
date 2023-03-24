import React, { FC } from 'react'
import InputWeight from './InputWeight'
type DisplayWeightProps ={
  weight: number,
  date : Date
}

type Props = {
  weights: DisplayWeightProps[]
}
const DisplayWeight : FC<Props> = ({weights}) =>{
  return (
    <div>
     
    </div>
  )
}

export default DisplayWeight