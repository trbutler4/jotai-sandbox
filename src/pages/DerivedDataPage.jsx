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
      <h2>Derived Data Atom</h2>
      <div className="render-counter">Render count: {renderCount}</div>
    </div>
  )
}
