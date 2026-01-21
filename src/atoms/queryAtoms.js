import { atom } from 'jotai'
import { atomWithQuery } from 'jotai-tanstack-query'

// Simulated API endpoint - using JSONPlaceholder for demo
const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) throw new Error('Failed to fetch users')
  return response.json()
}

// Full query atom - subscribers get { data, status, error, isLoading, isFetching, ... }
export const usersQueryAtom = atomWithQuery(() => ({
  queryKey: ['users'],
  queryFn: fetchUsers,
  staleTime: 5000, // 5 seconds - short for testing refetch behavior
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
