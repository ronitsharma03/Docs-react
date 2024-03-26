import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <SpeedInsights />
      <Background />
      <Foreground />     
    </div>
  )
}

export default App
