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
      <h2>Full Query Atom</h2>
      <div className="render-counter">Render count: {renderCount}</div>
    </div>
  )
}
