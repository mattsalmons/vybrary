import React from 'react'
import vinylData from './vinylData'

export default function Vinyl() {
  return (
    <div>
      <img src={vinylData[1].image} alt={vinylData[1].title} width='50%'/>
      <h2>{`${vinylData[1].artist} - "${vinylData[1].title}"`}</h2>
    </div>
  )
}
