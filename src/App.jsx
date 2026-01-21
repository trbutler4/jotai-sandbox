import { FullQueryPage } from './pages/FullQueryPage'
import { DerivedDataPage } from './pages/DerivedDataPage'
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>Jotai Query Subscription Comparison</h1>

      <div className="content side-by-side">
        <FullQueryPage />
        <DerivedDataPage />
      </div>

    </div>
  )
}

export default App
