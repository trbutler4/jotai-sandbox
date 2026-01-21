import { atom } from 'jotai'
import { atomWithQuery } from 'jotai-tanstack-query'
import { focusAtom } from 'jotai-optics'

// Generate random users
const fetchUsers = async () => {
  await new Promise((r) => setTimeout(r, 100)) // simulate network delay
  return Array.from({ length: 5 }, (_, i) => ({
    id: i,
    name: `User ${Math.random().toString(36).slice(2, 6)}`,
  }))
}

// Full query atom - subscribers get { data, status, error, isLoading, isFetching, ... }
export const usersQueryAtom = atomWithQuery(() => ({
  queryKey: ['users'],
  queryFn: fetchUsers,
  refetchInterval: 1000, // refetch every second
}))

// Derived atom - subscribers ONLY get the data array
export const usersDataOnlyAtom = atom((get) => {
  const query = get(usersQueryAtom)
  return query.data
})

// Derived atom that also provides loading state (common pattern)
export const usersWithLoadingAtom = atom((get) => {
  const query = get(usersQueryAtom)
  return {
    data: query.data,
    isLoading: query.isLoading,
  }
})

// Focused atom using jotai-optics - focuses on just the data property
export const usersFocusedDataAtom = focusAtom(usersQueryAtom, (optic) =>
  optic.prop('data')
)
