import { CircularProgress } from '@mui/material'
import { useEffect, useState } from 'react'
import './App.css'
import { Charts } from './components/Charts'
import { ListTestCases } from './components/ListCases'
import { CypressLog } from './cypress'

function App() {
  const [data, setData] = useState<any>(null)
  const [filter, setFilter] = useState<any>(null)



  useEffect(() => {
    fetch('http://localhost:3000/logs').then((res) => res.json()).then((data: CypressLog) => setData(data))
  }, [])

  useEffect(() => {
    let testWithErrors = null

    data?.results?.map((test: any) => {
      const suiterr = test?.suites?.filter((suite: any) => {
        if (suite.failures.length !== 0) {
          testWithErrors.push(suite)
        }
      })

    })
    console.log({ testWithErrors })
    if (filter === 'error') {

    }
    console.log(data?.results)
  }, [data])

  if (!data) return (
    <div className="App">
      <CircularProgress />
    </div>
  )

  return (
    <div className="App">
      <Charts results={data?.stats} />
      <div>
        <ListTestCases results={data.results} />
      </div>
    </div>
  )
}

export default App
