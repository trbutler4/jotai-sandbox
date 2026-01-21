import { useAtomValue } from 'jotai'
import { usersDataOnlyAtom } from '../atoms/queryAtoms'
import { useRenderCount } from '../hooks/useRenderCount'

// This page subscribes ONLY to the derived data atom
// It should only re-render when the actual data changes, not status transitions
export function DerivedDataPage() {
  const renderCount = useRenderCount('DerivedDataPage')
  const users = useAtomValue(usersDataOnlyAtom)

  return (
    <div className="page">
      <h2>Derived Data-Only Atom Subscription</h2>
      <div className="render-counter">Render count: {renderCount}</div>

      <div className="info-box">
        <p>
          This component only subscribes to <code>usersDataOnlyAtom</code> which
          derives just the <code>data</code> property from the query.
        </p>
      </div>

      {!users && <p>Loading...</p>}

      {users && (
        <div className="user-list">
          <h3>Users ({users.length}):</h3>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
