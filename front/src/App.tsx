import { CircularProgress } from '@mui/material'
import { useEffect, useState } from 'react'
import './App.css'
import { Charts } from './components/Charts'
import { CypressLog } from './cypress'

function App() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    fetch('http://localhost:3000/logs').then((res) => res.json()).then((data: CypressLog) => setData(data))
  }, [])

  useEffect(() => {
    console.log(data)

  }, [data])
  if (!data) return (
    <div className="App">
      <CircularProgress />
    </div>
  )
  return (
    <div className="App">
      <Charts results={data?.stats} />
    </div>
  )
}

export default App
