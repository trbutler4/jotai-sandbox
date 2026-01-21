import { useState } from 'react'
import { FullQueryPage } from './pages/FullQueryPage'
import { DerivedDataPage } from './pages/DerivedDataPage'
import './App.css'

function App() {
  const [page, setPage] = useState('full')

  return (
    <div className="app">
      <h1>Jotai Query Subscription Comparison</h1>

      <nav className="nav">
        <button
          className={page === 'full' ? 'active' : ''}
          onClick={() => setPage('full')}
        >
          Full Query Atom
        </button>
        <button
          className={page === 'derived' ? 'active' : ''}
          onClick={() => setPage('derived')}
        >
          Derived Data Atom
        </button>
      </nav>

      <div className="content">
        {page === 'full' && <FullQueryPage />}
        {page === 'derived' && <DerivedDataPage />}
      </div>

      <div className="instructions">
        <h3>How to test:</h3>
        <ol>
          <li>Open browser DevTools console</li>
          <li>Watch for render count logs as you switch between pages</li>
          <li>Wait for data to become stale (5s) and refetch</li>
          <li>Compare render counts between the two approaches</li>
        </ol>
      </div>
    </div>
  )
}

export default App
