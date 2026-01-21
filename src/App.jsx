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

      <div className="instructions">
        <h3>How to test:</h3>
        <ol>
          <li>Open browser DevTools console</li>
          <li>Watch the render counts on both sides</li>
          <li>Wait for data to become stale (5s) and refetch</li>
          <li>Compare render counts between the two approaches</li>
        </ol>
      </div>
    </div>
  )
}

export default App
