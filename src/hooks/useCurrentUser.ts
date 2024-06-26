import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const useCurrentUser = () => {
  const auth = useContext(AuthContext)

  if (!auth) {
    throw new Error('useCurrentUser must be used within an AuthProvider')
  }

  if (!auth.user) {
    throw new Error('User is not logged in')
  }

  return auth.user
}

export default useCurrentUser
