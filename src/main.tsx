import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'sonner'
import App from './App'

import AuthProvider from './context/AuthProvider'
import ConfirmationDialogProvider from './context/ConfirmationDialogProvider'
import './index.css'

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  cache: new InMemoryCache({}),
  resolvers: {
    Risk: {
      isDeleted: () => false,
    },
    Category: {
      isDeleted: () => false,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <NextUIProvider>
      <ApolloProvider client={client}>
        <ConfirmationDialogProvider>
          <AuthProvider>
            <App />
            <Toaster
              theme="system"
              toastOptions={{
                classNames: {
                  error: 'bg-danger text-danger-foreground',
                  default: 'bg-content1 text-content1-foreground',
                },
                className: 'shadow-small',
              }}
            />
          </AuthProvider>
        </ConfirmationDialogProvider>
      </ApolloProvider>
    </NextUIProvider>
  </React.StrictMode>,
)
