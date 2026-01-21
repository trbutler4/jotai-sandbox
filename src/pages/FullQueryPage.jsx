import { useAtomValue } from 'jotai'
import { usersQueryAtom } from '../atoms/queryAtoms'
import { useRenderCount } from '../hooks/useRenderCount'

// This page subscribes to the FULL query atom
// It will re-render when ANY property changes: data, status, isFetching, etc.
export function FullQueryPage() {
  const renderCount = useRenderCount('FullQueryPage')
  const query = useAtomValue(usersQueryAtom)

  return (
    <div className="page">
      <h2>Full Query Atom Subscription</h2>
      <div className="render-counter">Render count: {renderCount}</div>

      <div className="query-state">
        <h3>Query State Object:</h3>
        <pre>
          {JSON.stringify(
            {
              status: query.status,
              isLoading: query.isLoading,
              isFetching: query.isFetching,
              isError: query.isError,
              dataLength: query.data?.length,
            },
            null,
            2
          )}
        </pre>
      </div>

      {query.isLoading && <p>Loading...</p>}
      {query.isError && <p>Error: {query.error?.message}</p>}

      {query.data && (
        <div className="user-list">
          <h3>Users ({query.data.length}):</h3>
          <ul>
            {query.data.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
