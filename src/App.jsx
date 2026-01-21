import { FullQueryPage } from './pages/FullQueryPage'
import { DerivedDataPage } from './pages/DerivedDataPage'
import { FocusedDataPage } from './pages/FocusedDataPage'
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>Jotai Query Subscription Comparison</h1>

      <div className="content side-by-side">
        <FullQueryPage />
        <DerivedDataPage />
        <FocusedDataPage />
      </div>

    </div>
  )
}

export default App
