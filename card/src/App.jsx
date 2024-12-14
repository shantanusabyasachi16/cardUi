import { useState } from 'react'

import './App.css'
import { NeonGradientCard } from './components/ui/neon-gradient-card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <NeonGradientCard className="max-w-md max-h-md items-center justify-center text-center" />
    </div>
  )
}

export default App
