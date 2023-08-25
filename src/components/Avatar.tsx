/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'

interface Props {
  image: string
}

export const Avatar: FC<Props> = ({ image }) => {
  return <img className='w-10 h-10 rounded-full' src={image} alt='User image' />
}
