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
	uri: 'http://localhost:3000/gql',
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
						<Toaster />
					</AuthProvider>
				</ConfirmationDialogProvider>
			</ApolloProvider>
		</NextUIProvider>
	</React.StrictMode>,
)
