import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from '@nextui-org/react'
import { FC, PropsWithChildren, createContext, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

type User = {
  username: string
}

type AuthContextProps = {
  user: User | null
  login: (username: string) => void
}

export const AuthContext = createContext<AuthContextProps | null>(null)

const LoginForm: FC<{
  onSubmit: (data: { username: string }) => void
}> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
    },
    resolver: zodResolver(
      z.object({
        username: z.string().min(1, { message: 'Username is required' }),
      }),
    ),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Controller
        name="username"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            placeholder="Enter your username"
            labelPlacement="outside"
            variant="bordered"
            label="Username"
            isInvalid={fieldState.invalid}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Button type="submit" color="primary" fullWidth>
        Login
      </Button>
    </form>
  )
}

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = (username: string) => {
    setUser({ username })
  }

  return (
    <AuthContext.Provider value={{ user, login }}>
      {user ? (
        children
      ) : (
        <div className="flex h-screen flex-col items-center justify-center">
          <div className="w-96">
            <LoginForm onSubmit={({ username }) => login(username)} />
          </div>
        </div>
      )}
    </AuthContext.Provider>
  )
}

export default AuthProvider
