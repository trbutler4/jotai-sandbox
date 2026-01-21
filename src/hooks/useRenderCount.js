import { useRef } from 'react'

// Hook to track component render count
export function useRenderCount(label) {
  const count = useRef(0)
  count.current += 1

  console.log(`[${label}] Render #${count.current}`)

  return count.current
}
