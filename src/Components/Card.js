import React, { useContext } from 'react'
import { NewsContext } from '../Contexts/NewsContext'

export default function Card() {
  const {newsData} = useContext(NewsContext)
  return (
    <div>{newsData}</div>
  )
}
