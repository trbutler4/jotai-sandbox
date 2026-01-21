import { useAtomValue } from 'jotai'
import { usersFocusedDataAtom } from '../atoms/queryAtoms'
import { useRenderCount } from '../hooks/useRenderCount'

// This page uses focusAtom from jotai-optics to focus on just the data property
// It should only re-render when the actual data changes
export function FocusedDataPage() {
  const renderCount = useRenderCount('FocusedDataPage')
  const users = useAtomValue(usersFocusedDataAtom)

  return (
    <div className="page">
      <h2>Focused Data (optics)</h2>
      <div className="render-counter">Render count: {renderCount}</div>
    </div>
  )
}
